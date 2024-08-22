import { useState } from "react";
import styles from "./fooditem.module.css";
import FoodDetails from "./FoodDetails";
export default function FoodItem({ food, setfoodId }) {
  const [counter, setCounter] = useState(1);
  //state to get the food detail needed
  const [foodz, setfoodIdz] = useState("658615");
  return (
    <div className={styles.itemContainer}>
      <img className={styles.imgContainer} style={{}} src={food.image} alt="" />
      <div className={styles.nameButtonCardContainer}>
        <p className={styles.itemName}>{food.title}</p>
        <button
          className={styles.buttonItem}
          onClick={() => {
            //take this from here to fooddetails component
            console.log(food.id);
            setfoodId(food.id);
            setfoodIdz(food.id);
          }}
        >
          View Recipe
        </button>
        <button
          className={styles.buttonItem}
          onClick={() => setCounter(counter + 1)}
        >
          Add to cart
        </button>
        <p className={styles.itemContent}>{counter}</p>
      </div>
      {/* component that shows the food recipe menu */}
      <FoodDetails foodId={foodz}></FoodDetails>
    </div>
  );
}
