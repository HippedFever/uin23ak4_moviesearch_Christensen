import { useState, useEffect } from 'react'
import MovieData from './moviedata'

function MovieList() {
  const [movies, setMovies] = useState([])

  //OMDB API key: 36f369b9
  //Henter data fra API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.omdbapi.com/?apikey=36f369b9&s=James+Bond&plot=full&type=movie')
      const data = await response.json()
      const movieList = data.Search

      //Leser igjennom alle filmene funnet for å hente informasjon fra API
      const movieDataList = await Promise.all(movieList.map(async (movie) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=36f369b9&i=${movie.imdbID}`)
        const data = await response.json()
        return data
      }))
      setMovies(movieDataList)
    }
    fetchData()
  }, [])


  //Lager en artikkel igjennom Moviedata for hver film og wrapper alle i en main
  return (
    <main className="movie-list">
      {movies.map(movie => (
        <MovieData key={movie.imdbID} movie={movie} />
      ))}
    </main>
  )
}

export default MovieList
