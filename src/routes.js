import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Favoritos } from 'pages/Favoritos'
import { Inicio } from 'pages/Inicio'
import React from 'react'
import { Player } from 'pages/Player'
import { NotFound } from 'pages/NotFound'
import { PaginaBase } from 'pages/PaginaBase'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<Inicio />}></Route>
            <Route path='favoritos' element={<Favoritos />}></Route>
            <Route path=':id' element={<Player />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { AppRoutes }