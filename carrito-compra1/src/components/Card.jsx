import React, { useState } from 'react'
import '../styles/card.css'
export const Card = ({ imagen, titulo, descripcion, precio,handleAgregarProducto,handleEliminarProducto}) => {

    const [added, setAdded] = useState(false)
    const clickQuitar = () => {
        handleEliminarProducto()
        setAdded(false)
    }
    const clickAgregar = () => {
        handleAgregarProducto()
        setAdded(true)
    }
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">${precio}</p>
                {added
                ?
                <button type="button" className="boton-quitar" onClick={clickQuitar}>Eliminar del Carrito</button>
                :
                <button type="button" className="boton-agregar" onClick={clickAgregar}>Agregar al Carrito</button>
            }
            </div>
            
        </div>
    )
}
