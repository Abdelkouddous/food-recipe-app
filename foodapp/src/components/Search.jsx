import { useState, useEffect } from "react";
import styles from "./search.module.css";
//divide the url
const URL = "https://api.spoonacular.com/recipes/complexSearch";
//it should be saved in .env variable api key but will see it in the
//next course
//const API_KEY = "fc9e9e9aafd94a89878c8096b6177417";
const API_KEY = "ce343a48d93c45b89ecba5bbaa15a60d";
export default function Search({ foodData, setFoodData }) {
  //using useState to interact with user input fields
  const [query, setQuery] = useState("Pizza");
  //use effect hook is mostly used in component
  //thinks and communicate with api to get data
  //and sync data with component
  //calling api  //calling api use fetch
  //hooks in react ???
  // functions in react that should
  // be called only in react component
  //calling api  //calling api
  /**
   *  @param {string}
   * making an api call using useEffect hook
   */
  useEffect(
    () => {
      //if u dont async call it it will not return because it doesnt wait for data to fetch
      async function fetchFood() {
        //we get it in json
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        //execute this code after the data is returned
        const data = await res.json();
        console.log(data.results, foodData);
        setFoodData(data.results);
      }
      //call the function inside the callback fct
      //after defining it so it can be called
      fetchFood();
    },
    //dependency array
    [query]
  );

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputContainer}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      {/* <></>
      <button>Search</button>
      <></>
      <button>Clear</button> */}
    </div>
  );
}
