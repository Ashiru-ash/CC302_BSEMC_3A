function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <div className='card-image'>
        <img
          src={movie.image?.original}
          alt={movie.name}
        />
      </div>

      <div className='card-content'>
        <div className='card-top'>
          <h3>{movie.name}</h3>

          <span>
            Rating: {movie.rating.average || 'N/A'}
          </span>
        </div>

        <p className='genres'>
          {movie.genres.join(' • ')}
        </p>

        <a
          href={movie.url}
          target='_blank'
          rel='noreferrer'
          className='card-btn'
        >
          View Details
        </a>
      </div>
    </div>
  )
}

export default MovieCard