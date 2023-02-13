import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("Java Developer");
  const [surname, setSurname] = useState("Java Developer");

  useEffect(() => {}, []);

  const onChangeName = (event) => {
    debugger;
    setName(event.target.value);
  };

  const onChangeSurnmae = (event) => {
    debugger;
    setSurname(event.target.value);
  };

  return (
    <div>
      <Card />
      <Input
        id={"name"}
        title={"Adı"}
        for={"name"}
        value={name}
        onChange={onChangeName}
      />
      <Input
        id={"surname"}
        title={"surname"}
        for={"surname"}
        value={surname}
        onChange={onChangeSurnmae}
      />
      {name}
    </div>
  );
};

export default App;
