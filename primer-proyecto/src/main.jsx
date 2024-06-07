import React from 'react'
import ReactDOM from 'react-dom/client'
//import {ListadoApp } from './components/ListadoApp'  <ListadoApp value={0}/>
import { UsersApp } from './UsersApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UsersApp />
  </React.StrictMode>,
) 