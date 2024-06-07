import React from 'react'
import { useContext } from 'react'
import { UsuarioContext } from './context/UsuarioContext.jsx'

export const ContactScreen = () => {
  const{ usuario } = useContext(UsuarioContext)
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">nombre</th>
      <th scope="col">Tecnologia</th>
      <th scope="col">Email</th>
      <th scope="col">Redes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{usuario.nombre}</th>
      <td>{usuario.tecnologia}</td>
      <td>{usuario.mail}</td>
      <td>@{usuario.redes}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </>
  )
}
