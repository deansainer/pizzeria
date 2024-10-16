import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header.tsx";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";



function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <body>
      <div class="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div class="content">
            <Routes> 
              <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
    </body>
  );
}
export default App;
