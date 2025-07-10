import './header.css'
import { MenuBurger } from '../utils/menuBurger/menuBurger'

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

          <MenuBurger />
        </nav>
      </header>
    </>
  )
}

export { Header }
