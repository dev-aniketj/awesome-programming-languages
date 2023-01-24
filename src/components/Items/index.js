import Item from "./Item";

export default function Items({ data, value }) {
  return (
    <div id={value} className="items_container">
      <h2 className="items_heading">{value}</h2>
      <TodoList items={data} />
    </div>
  );
}

function TodoList({ items }) {
  return items.map((item) => <Item title={item.title} desc={item.desc} />);
}
