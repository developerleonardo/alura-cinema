import styles from './Pie.module.css'
import logo from "./logo-alura.png"

function Pie() {
    return (
        <footer className={styles.rodape}>
            <h2>Desarrollado por <img src={logo} alt="Alura"/></h2>
        </footer>
    )
}

export { Pie }