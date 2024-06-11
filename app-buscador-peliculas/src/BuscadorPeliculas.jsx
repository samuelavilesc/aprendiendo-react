import { useState } from 'react'

export const BuscadorPeliculas = () => {
  const apiKey = '7ec24496b97d9f89c98189c01e58b7db'
  const urlBase = `https://api.themoviedb.org/3/search/movie`
  const [peliculas, setPeliculas] = useState([])
  const [busqueda, setBusqueda] = useState('')

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${apiKey}`)
      const data = await response.json()
      setPeliculas(data.results) 
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (e) => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador de Películas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className='search-button'>Buscar</button>
      </form>
      {peliculas.length>0 ? (
        <div className='movie-list'>
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className='movie-card'>
              <h2>{pelicula.title}</h2>
              <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
              <p>{pelicula.overview}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron películas</p>
      )}
    </div>
  )
}
