import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Item from "./components/Item";

function App() {
  return (
    <div className="app">
      <Heading heading="Awesome Programming Languages" />
      <Item title="A1" desc="Hello World A1" />
      <Item title="A2" desc="Hello World A2" />
    </div>
  );
}

export default App;
