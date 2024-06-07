import React, { useMemo } from 'react'
import { useState } from 'react'

export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 8, 9, 11, 2, 15, 26])
    const [show, setShow] = useState(true)
    const getCalcuo = (listaNumeros) => useMemo(() => {
        console.log('Calculando...')

        return listaNumeros.reduce((a, b) => a * b)
    },[listaNumeros]) //useMemo memoriza el resultado de la función y solo lo recalcula si las dependencias cambian
    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, Math.floor(Math.random() * 100)])
    }
    //el btn show no hace nada solo sirve para ver que no recalcula el resultado de la función getCalculo
    return (
        <>
            <h2>Calculo: </h2>
            <p>{getCalcuo(listaNumeros)}</p>
            <button onClick={() => setShow(!show)} className="btn btn-primary">{show ? 'Show' : 'Hide'}</button> 
            <button onClick={() => agregarNumero()}className="btn btn-primary">Agregar número</button>
        </>
    )
}
