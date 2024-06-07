import React from 'react'
import { useState } from 'react'
import { AgregarTarea } from './AgregarTarea'
const Items =({nombre,visto}) =>{

    return(
        <li className={visto ? 'verde' : 'rojito'}>{nombre}
        {visto ? '✅' : '❌'}
        </li>
    )
}

export const ListadoApp = () => {
    let listadoSecciones=[
        {id: 1 ,nombre: "Requisitos", visto: true},
        {id: 2 ,nombre: "Vite", visto: true},
        {id: 3 ,nombre: "Componentes", visto: true},
        {id: 4 ,nombre: "Variables JSX", visto: true},
        {id: 5 ,nombre: "Props", visto: true},
        {id: 6 ,nombre: "Hooks", visto: true},
        {id: 7 ,nombre: "Custom Hooks", visto: false},
        {id: 8 ,nombre: "Eventos", visto: false},
    ]

    const [array, setarray] = useState(listadoSecciones)
    
    const onAgregarTarea = (tar) => {
        let tarea = tar.trim()
        if(tarea<1) return
        const nuevaTarea = {id: array.length+1, nombre: tarea, visto: false}
        setarray([...array, nuevaTarea])
    }

    return (
    <>
        <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
        <h1>Listado de Temas</h1>
        <ol>
            {array.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto} />)}
        </ol>
    </>
  )
}
