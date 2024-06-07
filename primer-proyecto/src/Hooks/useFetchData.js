import { useEffect, useState } from 'react'
import { fetchData } from '../Helpers/fetchData'
export const useFetchData = ( endPoint ) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getData = async () =>{
        const {data, isLoading} = await fetchData(endPoint)
        setData(data)
        setIsLoading(isLoading)
    }
    useEffect(() => {
      getData()
    }, [endPoint]) //funcion flecha y despues de la coma una variable para que cuando cambie su valor haga el fetch de nuevo

    return {
        data,
        isLoading
        }
    
}