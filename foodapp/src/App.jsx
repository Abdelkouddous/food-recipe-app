import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
//importing styles component
import "./App.css";
import "./style.css";
import "./index.css";
// import Example from "./components/NavbarV2";
import Container from "./components/Container";
import InnerContainer from "./components/innerContainer";

// import FoodItem from "./components/FoodItem";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("");
  /**
   * await isLoggedIn ? 'loggedIn' : 'notLoggedIn';
   */
  return (
    <div className="App">
      <NavBar></NavBar>
      <Search foodData={foodData} setFoodData={setfoodData}></Search>

      <Container>
        <InnerContainer>
          <FoodList
            setfoodId={setfoodId}
            foodData={foodData}
            setFoodData={setfoodData}
          ></FoodList>
        </InnerContainer>
        {/* <InnerContainer> */}
        {/* </InnerContainer>
        <InnerContainer>
          <FoodDetail></FoodDetail>
        </InnerContainer> */}
      </Container>
    </div>
  );

  {
    /*);
      to fix later
       <Example></Example> */
  }

  {
    /* we will create a component for this
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))} */
  }
}

export default App;
