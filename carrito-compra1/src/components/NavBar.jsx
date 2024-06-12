import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import { NavLink } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'
import { useContext } from 'react'
export const NavBar = () => {
    const{ listaCompras}= useContext(CarritoContext)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className='container-fluid'>
            <NavLink className="navbar-brand" to="/">Carrito</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Articulos</NavLink>
                    </li>
                </ul>
                <NavLink to="/carrito">
                <Badge badgeContent={listaCompras.length} color="secondary">
                    <ShoppingCartIcon color="action" />
                </Badge>
                </NavLink>
            </div>
            </div>
        </nav>
    )
}
