import React, { useState } from 'react'

export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setinputValue] = useState('')
  const onInputChange = (event) => {
    setinputValue(event.target.value)
  }
  const onSubmit = (event) => {
        event.preventDefault() // quitar que se actualice la pagina al apretar enter
        agregarTarea(inputValue) //Para sacar la informacion al padre llamamos a la funcion del padre
        setinputValue('') //Para limpiar el input
    }
    return (

    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder='Agregar tarea'
        value={inputValue}
        onChange={onInputChange}
        />
    </form>

  )
}
