import styles from "./fooditem.module.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
//component that shows the food recipe menu
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState("658615");
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //it should be saved in .env variable api key but will see it in the
  //next course
  //const API_KEY = "fc9e9e9aafd94a89878c8096b6177417";
  const API_KEY = "ce343a48d93c45b89ecba5bbaa15a60d";
  // const API_KEY = "122f7007acf94f79a4097801d20a8218";
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
      <h1 className={styles.itemName}>{food.title}</h1>
      <img src={food.image} className={styles.imgContainer}></img>
      <div className={styles.recipeDetails}>
        <span>
          {/* call the setstate food */}
          <strong>🛎️ {food.readyInMinutes} min</strong>
        </span>{" "}
        <span>{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
        <span>
          <strong>👨‍👩‍👦‍👦 Serves {food.servings}</strong>
        </span>
      </div>
      <div>
        <span>
          $<strong>{(food.pricePerServing / 100).toFixed(2)} </strong> per
          serving
        </span>
      </div>
      <div>
        {/* INGREDIENTS */}
        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-110">
          {" "}
          Ingredients{" "}
        </h1>
      </div>
      {/*  */}
      <ItemList food={food} isLoading={isLoading}></ItemList>
      {/*  */}
      <div>
        <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-110">
          {" "}
          Instructions{" "}
        </h1>
      </div>
      <div style={{ padding: "10px", boxShadow: "0 2px 3px #bfc5d466" }}>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
