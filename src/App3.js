import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import Input from "./components/Input";
import Table from "./components/Table";

const App3 = () => {
  const dispatch = useDispatch();

 

  const [tc, setTc] = useState("");
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");

  const btnEkle = () => {
    dispatch({
      type: "ekle",
      data: { tc: tc, ad: ad, soyad: soyad },
    });
  };
  const btnSil = () => {
    dispatch({type:"sil"})
  };

  const onChangeText = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    if (id === "tc") setTc(value);
    else if (id === "ad") {
      setAd(value);
    } else if (id === "soyad") {
      setSoyad(value);
    }
  };

  return (
    <div>
      <Input
        name="tc"
        id="tc"
        for="tc"
        title="TC NO:"
        onChange={onChangeText}
      />
      <Input
        name="ad"
        id="ad"
        for="ad"
        title="Adınız :"
        onChange={onChangeText}
      />
      <Input
        name="soyad"
        id="soyad"
        for="soyad"
        title="Soyadınız"
        onChange={onChangeText}
      />
      <Button title="Ekle" click={btnEkle} />
      <Button title="Sil" click={btnSil} />
      <Table />
    </div>
  );
};

export default App3;
