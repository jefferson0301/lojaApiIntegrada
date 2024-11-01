import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.containerHeader} >
        <Link className={styles.estiloLink} to={"/"} >Principal</Link>
        <Link className={styles.estiloLink} to={"/contato"} >Sugestões</Link>
        <Link className={styles.estiloLink} to={"/carrinho"} >Carrinho</Link>
    </div>
  )
}

export default Header