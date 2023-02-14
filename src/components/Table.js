import { useSelector } from "react-redux";

const Table = (props) => {
  const liste = useSelector((state) => state.veri);

  let elements = "";
  debugger;
  if (liste.length > 0) {
    elements = liste.map((element) => {
      return (
        <tr>
          <td>{element.tc}</td>
          <td>{element.ad}</td>
          <td>{element.soyad}</td>
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
