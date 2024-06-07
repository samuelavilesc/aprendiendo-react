import { useState } from 'react'

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)
    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }
    const decrementar = (valor = 1,negativo) => {
        if(!negativo && contador-valor<0){
            resetear()
            return
        }
        setContador(contador - valor)
    }
    const resetear = () => {
        setContador(valorInicial)
    }
    

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
