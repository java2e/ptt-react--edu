import { useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const MyCard =()=> {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Ekle" icon="pi pi-check" />
      <Button
        label="Çıkar"
        icon="pi pi-times"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );


  return(
    <div class="col-6 align-items-center justify-content-center">
    <Card
            title="Title"
            subTitle="Subtitle"
            footer={footer}
            header={header}
            className="md:w-25rem"
          >
          
          </Card>
          </div>

  )

}

export default MyCard;