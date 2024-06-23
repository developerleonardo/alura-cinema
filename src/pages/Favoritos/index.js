import React from 'react';
import { Titulo } from 'components/Titulo';
import { Banner } from 'components/Banner';
import { Card } from 'components/Card';
import { useFavoritosContext } from 'Context';
import styles from './Favoritos.module.css';

const Favoritos = () => {
  const {favorito} = useFavoritosContext();

  return (
    <>
      <Banner img="favoritos" color="#154580" />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {
          favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
          })
        }
      </section>
    </>
  )
}

export { Favoritos }