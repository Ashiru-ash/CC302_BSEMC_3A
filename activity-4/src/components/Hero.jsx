import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='hero'>
      <div className='overlay'></div>

      <div className='hero-content'>
        <span className='hero-tag'>
          MOVIE DISCOVERY PLATFORM
        </span>

        <h1>
          Explore The World
          <br />
          Of Entertainment
        </h1>

        <p>
          Browse trending shows and movies powered by a
          real-time API with a modern cinematic UI.
        </p>

        <div className='hero-buttons'>
          <Link to='/explore' className='primary-btn'>
            Explore Now
          </Link>

          <a href='#movies' className='secondary-btn'>
            Trending
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero