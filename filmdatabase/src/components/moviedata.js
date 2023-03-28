import { useState, useEffect } from 'react'

function MovieData({ movie }) {
  console.log(movie)

  return (
    <article className="movie-card">
      <img src={movie.Poster} className="posterIMG" />
      <aside>
        <h3>{movie.Title}</h3>
        <p><strong>Release year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </aside>
    </article>
  )
}

export default MovieData
