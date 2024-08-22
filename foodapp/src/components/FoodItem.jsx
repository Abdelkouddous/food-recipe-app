import { useState } from "react";
export default function FoodItem({ food }) {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h1>{food.title}</h1>
      <div>
        <img
          style={{
            height: "33%",
            width: "33%",
            borderRadius: "25%",
            borderColor: "rgba(0, 0, 0, 0.4)",
            boxShadow: " -3px -3px  rgba(0, 0, 0, 0.4)",
          }}
          src={food.image}
          alt={food.title}
        />
      </div>

      <button onClick={() => setCounter(counter + 1)}>Add to cart</button>
      <p>{counter}</p>
    </div>
  );
}
