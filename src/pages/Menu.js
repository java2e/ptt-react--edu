import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../components/Card";
import Header from "../components/Header";
const Menu = (props) => {
  const dispatch = useDispatch();

  const menuList = useSelector((state) => state.menuList);

  let cards = "";

  if (menuList.length > 0) {
    cards = menuList.map((menu) => {
      return (
        <MyCard
          title={menu.menuAdi + "  " + menu.fiyat}
          image={menu.imgUrl}
          description={menu.description}
        />
      );
    });
  }

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
        {cards}
      </div>
    </div>
  );
};

export default Menu;
