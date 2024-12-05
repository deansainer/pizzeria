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

  // sort types
  const sortingTypes = ["rating", "price", "title"];

  const [pizzaList, setPizzaList] = useState([]);


  // getting pizzas from backend
  useEffect(() => {
    async function getPizzas() {
      try {
        setIsLoading(true); // showing a sceleton when not loaded
        const descState = isDesc === true ? "asc" : "desc";
        const categoryQuery = activeCategory === 0 ? '' : `&category=${activeCategory}`;
        
        const response = await axios.get(
          `http://localhost:3001/api/pizzas?orderBy=${sortingTypes[sortingType]}&order=${descState}${categoryQuery}`
        );
  
        setPizzaList(response.data);
      } catch (err) {
        console.error('Failed to fetch pizzas:', err);
      } finally {
        setIsLoading(false); 
      }
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

          {/* rendering pizzas */}
        <div class="content__items">
           {isLoading  ? Array.from({ length: 4 }, (_, index) => <PizzaSkeleton key={index} />) : filteredPizzas.map((pizza) => (
            <PizzaItem item={pizza}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
