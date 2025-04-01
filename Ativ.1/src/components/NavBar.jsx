import { NavLink } from "react-router-dom"

import styles from "./css/NavBar.module.css"

const NavBar = () => {
  return (

        <nav className={styles.navbar}>
            <NavLink className={styles.link} to="/">
            Home
            </NavLink>
            <NavLink className={styles.link} to="/login">
            Login
            </NavLink>
            <NavLink className={styles.link} to="/cad">
            Cadastro
            </NavLink>
        </nav>
  )
}

export default NavBar