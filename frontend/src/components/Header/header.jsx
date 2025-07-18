import './header.css'
import { MenuBurger } from '../utils/menuBurger/menuBurger'
import { FaUser, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='nav'>

          <a href='Home' className='container__logo'>
            <img className='logo' src="vainaLogo.png" alt="" />
          </a>

          <div className="nav__links">
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">About</a>
            <a href="">Contact</a>
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
