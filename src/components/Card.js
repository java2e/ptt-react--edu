import { useDispatch, useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const MyCard = (props) => {
  const dispatch = useDispatch();

  const btnEkle = () => {
    const siparis = {
      id: 1,
      menu: {
        id: 1,
        adet: 2,
      },
      icecek: {
        id: 2,
        adet: 2,
      },
    };

    dispatch({type:'SIPARIS_EKLE',data:{siparis:siparis}})

  };

  const btnSil =()=>{

    dispatch({type:'SIPARIS_DUZENLE',data:{siparisId:1,menuId:1,listeTipi:'MENU',islem:'CIKAR'}})

  }

  const header = (
    <img
      alt="Card"
      src={"./img/"+props.image}
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Ekle" icon="pi pi-check" onClick={btnEkle} />
      <Button
        label="Çıkar"
        icon="pi pi-times"
        className="p-button-outlined p-button-secondary"
        onClick={btnSil}
      />
    </div>
  );

  return (
    <div class="col-6 align-items-center justify-content-center">
      <Card
        title={props.title}
        subTitle={props.description}
        footer={footer}
        header={header}
        className="md:w-25rem"
      ></Card>
    </div>
  );
};

export default MyCard;
