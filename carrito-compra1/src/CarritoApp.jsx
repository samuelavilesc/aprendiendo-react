import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoCompra = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className='container'>
          <Routes>
            <Route path="/" element={<ComprasPage></ComprasPage>} />
            <Route path="/carrito" element={<CarritoPage></CarritoPage>} />
            <Route path="/*" element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}