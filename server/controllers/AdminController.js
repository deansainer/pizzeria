const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class AdminController{

    async getAdmins(req, res){
        const admins = await db.query('select * from admins');
        res.json(admins.rows)
    }

    async signUp(req, res){
        try {
            const {username, password} = req.body;
            const isAdminExists = await db.query('select * from admins where username=$1', [username])
            if(!isAdminExists.rows[0] && password){
                const hashedPassword = await bcrypt.hash(password, 10)
                const newAdmin = await db.query('insert into admins (username, password) values ($1, $2)', [username, hashedPassword])
                const token = jwt.sign({username}, 'secret', {expiresIn: '1hr'})            
                res.json({username, token})
            } else {
                res.json('admin already exists')
            }
            
        } catch (error) {
            res.json(error)
        }
    }

    async logIn(req, res){
        const {username, password} = req.body;
        try {
            const admin = await db.query('select * from admins where username=$1', [username])
            const passwordMatch = await bcrypt.compare(password, admin.rows[0].password)
            if (!admin.rows[0]){
                res.json({error: 'Admin doesnt exists'})           
              } else if(passwordMatch) {
                const token = jwt.sign({username}, 'secret', {expiresIn: '1hr'})
                res.json({username: admin.rows[0].username, token}) 
              } else{
                res.json('Invalid password')
              }
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new AdminController();
