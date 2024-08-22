import styles from "./fooditem.module.css";
import { useEffect, useState } from "react";
//component that shows the food recipe menu
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState("");
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //it should be saved in .env variable api key but will see it in the
  //next course
  //const API_KEY = "fc9e9e9aafd94a89878c8096b6177417";
  const API_KEY = "ce343a48d93c45b89ecba5bbaa15a60d";
  useEffect(
    () => {
      //if u dont async call it it will not return because it doesnt wait for data to fetch
      async function fetchFood() {
        //we get it in json
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        //execute this code after the data is returned
        const data = await res.json();
        console.log(data);
        setFood(data);
      }
      //call the function inside the callback fct
      //after defining it so it can be called
      fetchFood();
    },
    //dependency array
    [foodId]
  );
  return (
    <div className={styles.nameButtonCardContainer}>
      {" "}
      Food details : <br></br>
      {/* <img src={food.image} ></img> */}
      {/* lets make an api call to get the 
      food details */}
      {foodId}
    </div>
  );
}
