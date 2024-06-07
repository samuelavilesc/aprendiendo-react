import React from 'react'
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { UsuarioContext } from './context/UsuarioContext.jsx'
export const LoginScreen = () => {
    const initialForm = {
        nombre: '',
        tecnologia: '',
        email: '',
        redes: ''
    }
    const {formState, nombre, tecnologia, email, redes, onInputChange} = useForm(initialForm)
    const {setUsuario} = useContext(UsuarioContext)
    onsubmit = (e) => {
        e.preventDefault()
        setUsuario(formState)
    }

    return (
        <>
            <form className='container'>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="nombre" 
                    value={nombre}
                    onChange={onInputChange}
                    placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="tecnologia">tecnologia</label>
                    <input type="text" className="form-control" name="tecnologia"  placeholder="Enter tecnologia"
                    value={tecnologia}
                    onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email"  placeholder="Enter Mail"
                    value={email}
                    onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="redes">Redes</label>
                    <input type="text" className="form-control" name="redes"  placeholder="Enter redes"
                    value={redes}
                    onChange={onInputChange}   
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Registrar Usuario</button>
            </form>
        </>
    )
}
