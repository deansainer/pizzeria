import Categories from "../components/Categories.tsx";
import PizzaItem from "../components/PizzaItem.tsx";
import { useState, useEffect } from "react";
import Sort from "../components/Sort.tsx";
import axios from "axios";
import Search from "../components/Search/index.jsx";

const Home = ({searchValue, setSearchValue}) => {
  // sort types
  const sortingTypes = ['rating', 'price', 'title']
  
  // states
  const [pizzaList, setPizzaList] = useState([]);
  const [sortingType, setSortingType] = useState(0)  
  const [activeCategory, setActiveCategory] = useState(0)
  const [isDesc, setIsDesc] = useState(true)

  // checking values
  console.log(`Sort by: ${sortingTypes[sortingType]} \n Category: ${activeCategory} \n Desc: ${isDesc}`);

  // getting pizzas from backend
  useEffect(() => {
    async function getPizzas() {
      let pizzas;
      const descState = isDesc === true ? 'asc' : 'desc';
      if (activeCategory === 0) {
        pizzas = await axios.get(
          `https://6706cc88a0e04071d2284b3e.mockapi.io/api/pizzas?orderBy=${sortingTypes[sortingType]}&order=${descState}`
        );
      } else {
        pizzas = await axios.get(
          `https://6706cc88a0e04071d2284b3e.mockapi.io/api/pizzas?category=${activeCategory}&orderBy=${sortingTypes[sortingType]}&order=${descState}`
        );
      }
      const response = pizzas.data;
      setPizzaList(response);
    }
    getPizzas();
  }, [sortingType, activeCategory, isDesc]);

  // pizza search
  const filteredPizzas = pizzaList.filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div class="container">
      <div>
        <div class="content__top">
          <Categories activeCategory={activeCategory} onClickCategory={setActiveCategory} />
          <Sort isDesc={isDesc} setIsDesc={setIsDesc} sortingType={sortingType} onClickSort={setSortingType} sortingTypes={sortingTypes}/>
        </div>
        <h2 class="content__title">Pizzas</h2>

        <div className="content__search_bar">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        <div class="content__items">

          {/* rendering pizzas */}
          {filteredPizzas.map((pizza) => (
            <PizzaItem
              title={pizza.title}
              price={pizza.price}
              image={pizza.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
