import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <div className='countainer'>
            <Link to='/'>
              <h1>GYM RECORD.</h1>
            </Link>
        </div>
    </header>
  )
}