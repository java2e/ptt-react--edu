import Header from "../components/Header";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";

const Siparis = (props) => {

  const [products,setProducts] = useState([])

  return (
    <div>
      <Header active="siparis" />
      <div className="card">
        <DataTable value={products} responsiveLayout="scroll">
          <Column field="code" header="ID"></Column>
          <Column field="name" header="Adı"></Column>
          <Column field="category" header="Adet"></Column>
          <Column field="quantity" header="Birim Fİyat"></Column>
          <Column field="quantity" header="Toplam"></Column>

        </DataTable>
      </div>
    </div>
  );
};

export default Siparis;
