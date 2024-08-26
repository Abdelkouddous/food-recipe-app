export default function Item({ item }) {
  return (
    <div
      style={{
        flex: "row",
        display: "flex",
        boxShadow: "1px 1px 2px 1px #ffffcc44",
      }}
      className="m-6 justify-around"
    >
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        className="h-10 w-10 rounded-full p-1 m-2 "
      ></img>

      <div className="text-">
        <h3>{item.name}</h3>
        <h3>
          {item.amount} {item.unit}
        </h3>
      </div>
    </div>
  );
}
