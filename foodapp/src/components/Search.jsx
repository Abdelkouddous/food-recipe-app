import { useState, useEffect } from "react";

//divide the url
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "fc9e9e9aafd94a89878c8096b6177417";
export default function Search() {
  //using useState to interact with user input fields
  const [query, setQuery] = useState("pizza");
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
  useEffect(() => {
    //if u dont async call it it will not return because it doesnt wait for data to fetch
    async function fetchFood() {
      //we get it in json

      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //add await till the data is returned
      const data = await res.json();
      console.log(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <></>
      <button>Search</button>
      <></>
      <button>Clear</button>
    </div>
  );
}
