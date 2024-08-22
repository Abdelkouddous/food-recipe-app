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
  /**
   * await isLoggedIn ? 'loggedIn' : 'notLoggedIn';
   */
  return (
    <div>
      {/*
      to fix later
       <Example></Example> */}
      <div className="App">
        <NavBar></NavBar>
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
