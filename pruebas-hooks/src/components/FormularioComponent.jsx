import React, { useEffect, useRef } from 'react'
import { useForm } from '../hooks/useForm'
export const FormularioComponent = () => {
  const focusRef = useRef()
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    const {formState,userName,email,password,onInputChange} = useForm(initialForm)

    useEffect(() => {
        focusRef.current.focus()
    }
    , [])    // guarda la referencia del elemento en focusRef para poder hacer cualquier cosa con ese objeto
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }
    return (
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <label htmlFor="userName">Username</label>
    <input 
        ref={focusRef}
        type="text" 
        className="form-control" 
        name="userName" 
        placeholder="Enter username"
        value={userName}
        onChange={onInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input 
        
        type="email" 
        className="form-control" 
        name="email" 
        placeholder="Enter email"
        value={email}
        onChange={onInputChange}
    />
    <small name="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input 
        type="password" 
        className="form-control" 
        name="password" 
        placeholder="Password"
        value={password}
        onChange={onInputChange}
    />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
