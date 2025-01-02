import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

    const currentUser = Cookies.get('username')
    console.log(currentUser);

    useEffect(() => {
      if(currentUser){
          navigate('/orders')
      } else{
          console.log('user is here:)');
      }
  }, [currentUser])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    function viewLogIn(status) {
        setIsLogin(status)
      }

    async function onSubmitForm(e, endpoint){
        e.preventDefault()

        if(!isLogin && password !== confirmPassword){
          console.log("Passwords doesnt match")
          return;
        }

        const response = await axios.post(`http://localhost:3001/api/admins/${endpoint}`, {username, password})
        if(isLogin && !response.data.token){
          console.log("Log in failed")
        } else if(!isLogin && password.length<4){
          console.log('Minimum password length is 4')
        } else {
          if(response.data.token && response.data.username){
            Cookies.set('username', response.data.username, { expires: 7 });
            Cookies.set('token', response.data.token, { expires: 7 });
            navigate('/orders')
          }
        }
        console.log(` username: ${username} \n password: ${password} \n` + (!isLogin ? ` confirm password: ${confirmPassword}` : ''))
    }

  return (
    <div className='auth_container'>
        <form className='auth_form'>
            <input className='auth_input' value={username} type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
            <input className='auth_input' value={password} type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
            {!isLogin && <input  className='auth_input'  value={confirmPassword} type='password' placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></input>}
            <button className='auth_submit_btn' onClick={(e) => onSubmitForm(e, isLogin ? 'logIn' : 'signUp')}>Submit</button>
        </form>

        <div className='auth_buttons'>
            <button style={isLogin ? {backgroundColor: '#cfcfcf'} : {backgroundColor: 'white'}} type='button' onClick={() => viewLogIn(true)} className='auth_type_btn'>Log in</button>
            <button style={isLogin ? {backgroundColor: 'white'} : {backgroundColor: '#cfcfcf'}} type='button' onClick={() => viewLogIn(false)} className='auth_type_btn'>Sign in</button>
        </div>
    </div>  
  )
}

export default Auth