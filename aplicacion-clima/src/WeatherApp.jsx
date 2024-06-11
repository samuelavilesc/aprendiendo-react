import React from 'react'
import { useState } from 'react'
export const WeatherApp = () => {
  const apiKey = 'e7dda58e16587267f6b16660b9812561'
  const urlBase = `https://api.openweathermap.org/data/2.5/weather`
  const difKelvin = 273.15
  const [ciudad, setCiudad] = useState('')
  const [dataClima, setDataClima] = useState(null)
  const handleCambioCiudad = (e)=>{
     setCiudad(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(ciudad.trim().length > 0) fetchClima()
    }
    const fetchClima = async ()=>{
        try{
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
            if(!response.ok){
                throw new Error('No se pudo obtener la información')
            }
            const data = await response.json()
            setDataClima(data)
        }catch(error){
            console.error('Ocurrió el siguiente problema: ', error)
        }
    }
    return (
    <div className='container'>
        <h1>Aplicación del clima usando React</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={ciudad}
            onChange={handleCambioCiudad}
            
            />

            <button type='submit'>Buscar</button>
        </form>
        {
            dataClima && (
                <div>
                    <h2>{dataClima.name}</h2>
                    <p>Temperatura: {(dataClima?.main?.temp - difKelvin).toFixed(1)}ºC</p>
                    <p>Condición meteorológica: {dataClima.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} />
                </div>
            )
        }

    </div>
  )
}
