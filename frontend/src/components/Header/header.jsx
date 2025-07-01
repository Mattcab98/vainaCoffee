import './header.css'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
        </nav>
        <button>
          <FaBars className='burger'></FaBars>
        </button>
      </header>
    </>
  )
}

export { Header }
