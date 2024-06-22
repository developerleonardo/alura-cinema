import React from 'react'
import { Cabecera } from 'components/Cabecera'
import { Pie } from 'components/Pie'
import { Banner } from 'components/Banner'

const Inicio = () => {
  return (
    <>
      <Cabecera />
      <Banner img="home" color="#154580" />
      <Pie />
    </>
  )
}

export { Inicio }