import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyCard from "../components/Card";
import Header from "../components/Header";
const Menu = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://localhost:8080/api/menu/list");

      if (response.status === 200) {
        dispatch({ type: "MENU_LOAD", data: { menuList: response.data } });
      }
    };

    loadData();
  }, []);

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
