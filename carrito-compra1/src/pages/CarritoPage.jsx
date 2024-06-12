import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
export const CarritoPage = () => {
  const { listaCompras, agregarProducto, eliminarProducto, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext)
  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }
  const handleImpresion = () => {
    
    print()
  }
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map(producto => (
            <tr key={producto.id}>
              <th scope="row">{producto.title}</th>
              <td>{producto.price}</td>
              <td>
                <button className='btn btn-ouline-primary' onClick={() => aumentarCantidad(producto.id)}>+</button>
                <button className='btn btn-primary'>{producto.cantidad}</button>
                <button className='btn btn-ouline-primary' onClick={() => disminuirCantidad(producto.id)}>-</button>
              </td>
              <td><button className='btn btn-danger' onClick={() => eliminarProducto(producto.id)}>Eliminar</button></td>
            </tr>
          ))}
          <tr>
            <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td>${calcularTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary'
          onClick={handleImpresion}
          disabled={listaCompras.length<1}
        >COMPRAR</button>
      </div>
    </>
  )
}
