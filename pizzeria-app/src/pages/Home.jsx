import Categories from "../components/Categories.tsx";
import PizzaItem from "../components/PizzaItem.tsx";
import { useState, useEffect, useContext } from "react";
import Sort from "../components/Sort.tsx";
import axios from "axios";
import { PizzaContext } from "../App.js";
import PizzaSkeleton from '../components/PizzaSkeleton.tsx'

const Home = () => {

  const [isLoading, setIsLoading] = useState(true)
  const {
    searchValue,
    activeCategory,
    setActiveCategory,
    sortingType,
    setSortingType,
    isDesc,
    setIsDesc,
  } = useContext(PizzaContext);

console.log(PizzaSkeleton);
  // sort types
  const sortingTypes = ["rating", "price", "title"];

  const [pizzaList, setPizzaList] = useState([]);


  // getting pizzas from backend
  useEffect(() => {
    async function getPizzas() {
      let pizzas;
      const descState = isDesc === true ? "asc" : "desc";
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
      setIsLoading(false)
    }
    getPizzas();
  }, [sortingType, activeCategory, isDesc]);

  // pizza search
  const filteredPizzas = pizzaList.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div class="container">
      <div>
        <div class="content__top">
          <Categories
            activeCategory={activeCategory}
            onClickCategory={setActiveCategory}
          />
          <Sort
            isDesc={isDesc}
            setIsDesc={setIsDesc}
            sortingType={sortingType}
            onClickSort={setSortingType}
            sortingTypes={sortingTypes}
          />
        </div>
        <h2 class="content__title">Pizzas</h2>

        <div class="content__items">
          {/* rendering pizzas */}
           {isLoading  ? Array.from({ length: 4 }, (_, index) => <PizzaSkeleton key={index} />) : filteredPizzas.map((pizza) => (
            <PizzaItem
              title={pizza.title}
              price={pizza.price}
              image={pizza.image}
              item={pizza}
            />
          ))
  }
        </div>
      </div>
    </div>
  );
};

export default Home;
