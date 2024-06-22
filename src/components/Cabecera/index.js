import React from 'react'
import { Link } from 'react-router-dom';
import { CabeceraLink } from '../CabeceraLink';
import logo from "./logo-alura.png"
import styles from "./Cabecera.module.css";

const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
            <Link to={"/"}>
                <section className={styles.logoContainer}>
                    <img src={logo} alt='Logo Alura' />
                    <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Inicio
                </CabeceraLink>
                <CabeceraLink url="./favoritos">
                    Favoritos
                </CabeceraLink>
            </nav>
        </header>
    )
}

export { Cabecera }