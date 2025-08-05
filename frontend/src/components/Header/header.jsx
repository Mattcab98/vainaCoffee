import './header.css'
import { MenuBurger } from '../utils/menuBurger/menuBurger'
import { FaUser, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav'>

          <Link to='/' className='container__logo'>
            <img className='logo' src="vainaLogo.png" alt="" />
          </Link>

          <div className="nav__links">
            <Link to='/' >Home</Link>
            <Link to='/products' >Products</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
          </div>
            <div className="contain__icons">
              <FaUser />
              <FaCartShopping />
              <FaSearch />
            </div>


          <MenuBurger style='display:none'/>
        </nav>
      </header>
    </>
  )
}

export { Header }
