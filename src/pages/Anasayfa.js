import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const Anasayfa = (props) => {
  const history = useHistory(); // hooks !!

  const goIletisim = () => {
    history.push("/iletisim");
  };

  return (
    <div>
      <Button title="Iletişim" click={goIletisim} />
    </div>
  );
};

export default Anasayfa;
