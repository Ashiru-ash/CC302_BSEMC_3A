import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='logo'>NEXORA</h1>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
      </div>
    </nav>
  )
}

export default Navbar