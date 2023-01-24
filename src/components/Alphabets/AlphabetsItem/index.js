export default function AlphabetsItem({ value = "" }) {
  return (
    <a href={"#" + value} className="alphabets_item">
      {value}
    </a>
  );
}
