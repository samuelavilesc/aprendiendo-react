import { UserList } from "./components/UserList"
import { useState, useEffect } from 'react'
export const UsersApp = () => {

    const [endPoint, setEndPoint] = useState('users')
    const handleFetch = () => {
        setEndPoint('comments')
    }
    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <UserList endPoint={endPoint}/>
            <button onClick={handleFetch}>Aqui se llama a la API</button>
        </>
    )
}
