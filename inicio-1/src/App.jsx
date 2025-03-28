App
import "./App.css";
import ListRender from "./component/ListRender";
import Varia from "./component/Varia";
import MyCss from "./components/MyCss";
import MeuCss from "./components/MeuCss";
import Imagens from "./components/Imagens";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";


function App() {

  return (
    <>

      <FirstComponent />
      <hr />
      <TemplateExpressions />
      <hr />      
      <Events/>
      <hr />
      <Imagens/>
      <hr />
      <MeuCss />
      <p>Texto escrito no App</p>
      <hr />
      <MyCss/>
      <hr />
      <Varia/>
      <hr />
      <ListRender/>
      <hr />
    </>
  )
}

export default App
