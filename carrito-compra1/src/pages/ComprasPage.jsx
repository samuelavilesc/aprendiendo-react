import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'
export const ComprasPage = () => {
    const { productos } = useContext(ProductosContext)
    const {listaCompras,agregarProducto,eliminarProducto,aumentarCantidad,disminuirCantidad} = useContext(CarritoContext)
    const handleAgregarProducto = (producto) => {
        agregarProducto(producto)
    }
    const handleEliminarProducto = (id) => {
        eliminarProducto(id)
    }
    const handleAumentarCantidad = (id) => {
        aumentarCantidad(id)
    }
    const handleDisminuirCantidad = (id) => {
        disminuirCantidad(id)
    }

    return (
        <>
            <h1>Artículos: </h1>
            <hr/>
               {productos.map(producto => (
                    <Card
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}
                        handleAgregarProducto={() => handleAgregarProducto(producto)}
                        handleEliminarProducto={() => handleEliminarProducto(producto.id)}
                        handleAumentarCantidad={() => handleAumentarCantidad(producto.id)}
                        handleDisminuirCantidad={() => handleDisminuirCantidad(producto.id)}
                    />
                ))}
        </>
    )
}
