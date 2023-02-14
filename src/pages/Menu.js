import MyCard from "../components/Card";
import Header from "../components/Header";
const Menu = (props) => {
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

export default Menu;
