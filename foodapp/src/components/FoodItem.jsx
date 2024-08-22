import { useState } from "react";
export default function FoodItem({ food }) {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h1>{food.title}</h1>
      <div>
        <img src={food.image} alt={food.title} />
      </div>

      <button onClick={() => setCounter(counter + 1)}>Add to cart</button>
      <p>{counter}</p>
    </div>
  );
}
