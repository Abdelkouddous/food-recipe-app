import styles from "./fooditem.module.css";
import { useEffect, useState } from "react";
//component that shows the food recipe menu
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //it should be saved in .env variable api key but will see it in the
  //next course
  //const API_KEY = "fc9e9e9aafd94a89878c8096b6177417";
  //const API_KEY = "ce343a48d93c45b89ecba5bbaa15a60d";
  const API_KEY = "122f7007acf94f79a4097801d20a8218";
  useEffect(
    () => {
      //if u dont async call it it will not return because it doesnt wait for data to fetch
      async function fetchFood() {
        //we get it in json
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        //execute this code after the data is returned
        const data = await res.json();
        console.log(data);
        //we setfood to the data got from the api
        setFood(data);
        setIsLoading(false);
      }
      //call the function inside the callback fct
      //after defining it so it can be called
      fetchFood();
    },
    //dependency array so whenever the foodId is changed
    //we update the fetchfood
    [foodId]
  );
  return (
    <div className={styles.foodDetailCotainer}>
      {" "}
      Food details : <br></br>
      {/* <img src={food.image} ></img> */}
      {/* lets make an api call to get the 
      food details */}
      <h2>{food.title}</h2>
      <img src={food.image} className={styles.imgContainer}></img>
      <br></br>
      <span>
        {/* call the setstate food */}
        <strong>🛎️ {food.readyInMinutes} min</strong>
      </span>{" "}
      <br></br>
      <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
      <span>
        <br></br>
        <strong>Serves 👨‍👩‍👦‍👦 {food.servings}</strong>
      </span>
      <div>
        <span>
          $<strong>{Math.round(food.pricePerServing / 100, 2)} </strong> per
          serving
        </span>
      </div>
      <div>
        <h2> Instructions</h2>
        {isLoading
          ? "Loading ..."
          : food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))}

        <strong></strong>
      </div>
    </div>
  );
}
