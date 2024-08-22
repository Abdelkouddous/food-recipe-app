import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
//importing styles component
import "./App.css";
import "./style.css";
import "./index.css";
import Example from "./components/NavbarV2";
function App() {
  const [foodData, setfoodData] = useState([]);

  return (
    <div>
      {/*
      to fix later
       <Example></Example> */}
      <NavBar></NavBar>
      <div className="App">
        <Search foodData={foodData} setFoodData={setfoodData}></Search>

        {/* we will create a component for this
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))} */}
        <FoodList foodData={foodData} setFoodData={setfoodData}></FoodList>
      </div>
    </div>
  );
}

export default App;
