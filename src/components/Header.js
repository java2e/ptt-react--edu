import React from "react";
import { Menubar } from "primereact/menubar";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  const items = [
    {
      label: "Menü",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        history.push("/menu");
      },
    },
    {
      label: "İçecek",
      icon: "pi pi-fw pi-power-off",
      command: () => {
        history.push("/icecek");
      },
    },
    {
      label: "Sipariş",
      icon: "pi pi-fw pi-cart-plus",
      command: () => {
        history.push("/siparis");
      },
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};

export default Header;
