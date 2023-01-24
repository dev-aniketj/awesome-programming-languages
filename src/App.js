import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Item from "./components/Items/Item";
import Alphabets from "./components/Alphabets";
import Items from "./components/Items";
import data from "./components/datafiles/data";

function App() {
  return (
    <div className="app">
      <Heading heading="Awesome Programming Languages" />

      <Alphabets />

      <Items data={data.a} value="A" />
      <Items data={data.b} value="B" />
    </div>
  );
}

export default App;
