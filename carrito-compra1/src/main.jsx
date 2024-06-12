import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoCompra } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CarritoCompra />
  </React.StrictMode>,
  </BrowserRouter>
)
