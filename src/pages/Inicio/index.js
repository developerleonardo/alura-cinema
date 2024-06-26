import React, { useEffect, useState } from 'react'
import { Banner } from 'components/Banner'
import { Titulo } from 'components/Titulo'
import { Card } from 'components/Card'
import styles from './index.module.css'

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/developerleonardo/alura-cinema-api/videos").then(response => response.json()).then(data => {
      setVideos(data);
    })
  }, [])
  
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar tus videos favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {
          videos.map((video) => {
            return <Card {...video} key={video.id} />
          })
        }
      </section>
    </>
  )
}

export { Inicio }