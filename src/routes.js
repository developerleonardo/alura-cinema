import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FavoritosProvider } from 'Context'
import { Cabecera } from 'components/Cabecera'
import { Container } from 'components/Container'
import { Pie } from 'components/Pie'
import { Favoritos } from 'pages/Favoritos'
import { Inicio } from 'pages/Inicio'
import React from 'react'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecera />
        <Container>
          <FavoritosProvider>
            <Routes>
              <Route path='/' element={<Inicio />}></Route>
              <Route path='/favoritos' element={<Favoritos />}></Route>
            </Routes>
          </FavoritosProvider>
        </Container>
        <Pie />
      </BrowserRouter>
    </>
  )
}

export { AppRoutes }