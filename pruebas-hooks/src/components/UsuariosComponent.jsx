import React from 'react'
import { useFetch } from '../hooks/useFetch'
export const UsuariosComponent = () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const { data, isLoading, errors } = useFetch(url)

    return (
        <>
            <h1>Lista de Usuarios</h1>
            {isLoading ? <h4>Loading...</h4>
                : errors ? <h4>{errors}</h4>
                    : <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table >

            }
        </>
    )
}
