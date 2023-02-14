import { Route } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Iletisim from "./pages/Iletisim";


const App =()=> {
  return(
    <div>

      <Route path="/anasayfa">
        <Anasayfa />
      </Route>
      <Route path="/iletisim">
        <Iletisim />
      </Route>
      <Route path="/" exact>
        <Anasayfa />
      </Route>


    </div>
  )
}

export default App;