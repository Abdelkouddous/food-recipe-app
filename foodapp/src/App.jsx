import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
//importing styles component
import "./App.css";
import "./style.css";
import "./index.css";
import styles from "./components/nav.module.css";
import Example from "./components/NavbarV2";
import Container from "./components/Container";
import InnerContainer from "./components/innerContainer";
import FoodDetails from "./components/FoodDetails";

// import FoodItem from "./components/FoodItem";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("");
  const [navColour, updateNavbar] = useState(false);
  /**
   * await isLoggedIn ? 'loggedIn' : 'notLoggedIn';
   */
  return (
    <div
      className="App"
      // style={{
      //   backgroundColor: navColour ? "#333" : "#fff",
      //   color: navColour ? "#fff" : "#333",
      // }}
    >
      {/* <button
        className={styles.sticky}
        onClick={() => updateNavbar(!navColour)}
      >
        ☾
      </button> */}
      <Example></Example>

      <Search foodData={foodData} setFoodData={setfoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList
            setfoodId={setfoodId}
            foodData={foodData}
            setFoodData={setfoodData}
          ></FoodList>
          <FoodDetails key={foodData.id} foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>
      <NavBar></NavBar>
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
