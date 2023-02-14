import { useDispatch, useSelector } from "react-redux";

const Table = (props) => {

  const dispatch= useDispatch();
  const liste = useSelector((state) => state.veri);

  const kolonSil =(id)=>{

    dispatch({type:"kolonSil",data:{id:id}})

  }


  let elements = "";
  debugger;
  if (liste.length > 0) {
    elements = liste.map((element) => {
      return (
        <tr>
          <td>{element.tc}</td>
          <td>{element.ad}</td>
          <td>{element.soyad}</td>
          <td><button onClick={()=>kolonSil(element.tc)}>Sil</button></td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table>
        <tr>
          <th>TC NO</th>
          <th>Adı</th>
          <th>Soyadı</th>
        </tr>
        {elements}
      </table>
    </div>
  );
};

export default Table;
