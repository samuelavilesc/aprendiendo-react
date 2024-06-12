import { CarritoContext } from "./CarritoContext"
import { useReducer } from "react"


export const CarritoProvider = ({ children }) => {
    const initialState = []

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[Carrito] Agregar producto':
                return [...state, action.payload]
            case '[Carrito] Eliminar producto':
                return state.filter(compra => compra.id !== action.payload)
            case '[Carrito] Aumentar cantidad':
                return state.map(item => {
                    const cant = item.cantidad + 1
                    if (item.id === action.payload) return { ...item, cantidad: cant }
                    return item
        
                })
            case '[Carrito] Disminuir cantidad':
                return state.map(item => {
                    const cant = item.cantidad - 1
                    if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant }
                    return item
        
                })
            default:
                return state
        }
    }
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)
    const agregarProducto = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[Carrito] Agregar producto',
            payload: compra
        }
        dispatch(action)
    }
    const eliminarProducto = (id) => {
        const action = {
            type: '[Carrito] Eliminar producto',
            payload: id
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[Carrito] Aumentar cantidad',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[Carrito] Disminuir cantidad',
            payload: id
        }
        dispatch(action)
    }


    return (
        <CarritoContext.Provider value={{ listaCompras, agregarProducto, eliminarProducto, aumentarCantidad, disminuirCantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}
