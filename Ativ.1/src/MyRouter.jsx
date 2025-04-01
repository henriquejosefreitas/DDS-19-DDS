import { createBrowserRouter } from "react-router-dom"

import App from "./App";
import PaginaErro from "./Pages/PaginaErro";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<PaginaErro/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/cad",
                element:<Cadastro/>
            },

        ],
    },
]);

export default router