import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import SectionTitle from './SectionTitle'

function MovieGrid() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.slice(0, 18))
      })
  }, [])

  return (
    <section className='movies-section' id='movies'>
      <SectionTitle
        title='Trending Shows'
        subtitle='Real-time data powered by the TVMaze API'
      />

      <div className='movie-grid'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieGrid