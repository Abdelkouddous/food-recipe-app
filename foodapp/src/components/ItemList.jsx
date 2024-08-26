//here is the ingredients component

import Item from "./item";

export default function ItemList({ food, isLoading }) {
  return (
    <div className="text-lg flex-row min-w-max align-middle">
      <ol>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          food.extendedIngredients.map((item) => <Item item={item}></Item>)
        )}
      </ol>
    </div>
  );
}
