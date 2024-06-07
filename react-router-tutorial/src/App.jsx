import React from 'react'
import {NavBar} from './routes/components/NavBar.jsx'
import {Routes, Route, Navigate} from 'react-router-dom'
import {HomeScreen} from './routes/HomeScreen.jsx'
import {AboutScreen} from './routes/AboutScreen.jsx'
import {ContactScreen} from './routes/ContactScreen.jsx'
import { UsuarioProvider } from './routes/context/UsuarioProvider.jsx'
import { LoginScreen } from './routes/LoginScreen.jsx'
export const App = () => {
  return (
    <UsuarioProvider>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/*" element={<Navigate to='/'/>} />
    </Routes>
    </UsuarioProvider>
  )
}
