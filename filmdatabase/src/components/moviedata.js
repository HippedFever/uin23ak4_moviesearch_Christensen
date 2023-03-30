import placeholderImage from '../images/placeholder.png';

function MovieData({ movie }) {
  console.log(movie)

  const moviePoster = movie.Poster !== 'N/A' ? movie.Poster : placeholderImage
    
  return (
    <article className="movie-card">
      <img src={moviePoster} className="posterIMG" />
      <aside>
        <h3>{movie.Title}</h3>
        <p><strong>Release year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <button className='myButton' onClick={() => window.location.href=`https://www.imdb.com/title/${movie.imdbID}`}>Visit IMDB</button>
      </aside>
    </article>
  )
}

export default MovieData
