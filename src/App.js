import { Route } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Icecek from "./pages/Icecek";
import Iletisim from "./pages/Iletisim";
import Menu from "./pages/Menu";
import Siparis from "./pages/Siparis";


const App =()=> {
  return(
    <div>

      <Route path="/menu" exact>
        <Menu />
      </Route>
      <Route path="/icecek" exact>
        <Icecek />
      </Route>
      <Route path="/siparis" exact>
        <Siparis />
      </Route>
      <Route path="/" exact>
        <Menu />
      </Route>


    </div>
  )
}

export default App;