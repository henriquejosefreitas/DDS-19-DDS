import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

//Importação do Boot-Strap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      <NavBar />
      <Outlet />
    
    </>
  )
}

export default App;
