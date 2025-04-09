import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

//Importação do Boot-Strap
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavBar from "./components/NewNavBar";
import Container from "react-bootstrap/Container";

function App() {
  return(
    <>
      {/* <NavBar/> */}
      <NewNavBar/>
      <Container>
        <Outlet />
      </Container>
      

    
    </>
  )
}

export default App;
