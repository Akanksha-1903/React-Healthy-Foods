import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/container";
import "./App.css";
import { useState } from "react";

function App() {
  //let foodItems = [];
  //let foodItems = ["Sabzi", "Green Vegetables", "Roti", "Salad", "Milk"];

  let [foodItems, setFoodItems] = useState([]);


  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
