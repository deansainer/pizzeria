import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header.tsx";
import { useState, createContext  } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

export const PizzaContext = createContext(); // creating and exporting context


function App() {
  
  const [cartItems, setCartItems] = useState([])

  const [searchValue, setSearchValue] = useState('')
  const [sortingType, setSortingType] = useState(0)  
  const [activeCategory, setActiveCategory] = useState(0)
  const [isDesc, setIsDesc] = useState(true)

  return (
    <body>
      <PizzaContext.Provider value={{searchValue, setSearchValue, sortingType, setSortingType, activeCategory, setActiveCategory, isDesc, setIsDesc, cartItems, setCartItems}}>
        <div class="wrapper">
          <Header/>
            <div class="content">
              <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </div>
          </div>
        </PizzaContext.Provider>
    </body>
  );
}
export default App;
