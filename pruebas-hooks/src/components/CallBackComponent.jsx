import React from 'react'
import { Incrementar } from './Incrementar'
import { useState, useCallback } from 'react'
export const CallBackComponent = () => {
    const [count, setCount] = useState(0)
    
    const incrementarPadre = useCallback((val) => {
        setCount(contador => contador + val)
    }, [])

    return (
        <>
            <h1>Contador: {count}</h1>
            <Incrementar incrementarPadre={incrementarPadre}></Incrementar>
        </>
    )
}
