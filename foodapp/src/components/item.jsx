export default function Item({ item }) {
  return (
    <div style={{ flex: "row", display: "flex" }} className="">
      <div>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          className="h-12 w-12 rounded-full "
        ></img>
      </div>
      <div>
        <h3>{item.name}</h3>
        <h3>
          {item.amount} {item.unit}
        </h3>
      </div>
    </div>
  );
}
