import FoodItem from "./FoodItem";
export default function FoodList({ foodData, setfoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setfoodId={setfoodId} key={food.id} food={food}></FoodItem>
      ))}
    </div>
  );
}
