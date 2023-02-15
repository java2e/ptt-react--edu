import { useSelector } from "react-redux";
import MyCard from "../components/Card";
import Header from "../components/Header";

const Icecek = (props) => {


  const list = useSelector((state) => state.icecekList);

  debugger

  let cards = '';

  if(list?.length>0){

  }


  
  return (
    <div>
    <Header active="menu" />
    <div class="flex justify-content-center flex-wrap card-container yellow-container">
      
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </div>
  </div>
  );
};

export default Icecek;
