import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { useDispatch, useSelector } from "react-redux";

const App2 = () => {


  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const ad = useSelector(state=>state.name);
  const soyad= useSelector(state=> state.surname);



  const [name, setName] = useState("Java Developer");
  const [surname, setSurname] = useState("Java Developer");
  
  const [myCard,setMyCard] = useState("");

  useEffect(() => {}, []);

  const onChangeName = (event) => {
    debugger;
    setName(event.target.value);
  };

  const onChangeSurnmae = (event) => {
    debugger;
    setSurname(event.target.value);
  };

  const btnClick =()=> {
    const element =<p>{name +" "+surname}</p>;
    setMyCard(element)
  }

  const btnArtir=()=>{
    dispatch({type:'increment'})
  }

  const btnAzalt=()=>{
    dispatch({type:'decrement'})
  }

  const btnEkle=()=>{
    dispatch({type:"ekle",data:{name:name,surname:surname}})
  }

  const btnSil=()=>{
    dispatch({type:"sil"})
  }


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
      <Button onClick={btnClick}/>
      


<div>

<Button title="Artır" click={btnArtir} />
<Button title="Azalt" click={btnAzalt}/>
{"Sayı:" + counter}

<Button title="Ekle" click={btnEkle} />
<Button title="Sil" click={btnSil}/>
{"Adınız" + ad}
{"Soyadınız" +soyad}

</div>



    </div>
  );
};

export default App2;
