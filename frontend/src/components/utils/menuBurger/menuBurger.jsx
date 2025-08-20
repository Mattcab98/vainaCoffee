import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';
import './menuBurger.css';
import { FaBars, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSubmit = () => {
    setIsOpen((prev) => !prev);
  };

    const handleLinkClick = () => {
    setIsOpen(false);
  };

useEffect(() => {
  if (isOpen) {
    // Transición de apertura (sin modificar)
    menuRef.current.style.display = 'flex';
    gsap.to(menuRef.current, {
      clipPath: 'circle(150% at 90% 5%)',
      duration: 1,
      ease: 'power3.out',
    }); 
  } else {
    // Transición de cierre mejorada
    gsap.to(menuRef.current, {
      clipPath: 'circle(0% at 90% 5%)', // Cierra al mismo punto de origen
      opacity: 0, // Se desvanece por completo
      duration: 0.5, // Duración más suave
      ease: 'power3.in',
      onComplete: () => {
        menuRef.current.style.display = 'none';
        menuRef.current.style.opacity = 1; // Restaura la opacidad para la próxima apertura
      },
    });
  }
}, [isOpen]);

  return (
    <>
      <button
        className={`btn__burger ${isOpen ? 'active' : ''}`}
        onClick={handleSubmit}>
        {isOpen ? <IoMdClose/> : <FaBars/>}
      </button>

      <div className='menu__responsive' ref={menuRef}>
        <div className="container__a">
          <Link to={'/'} onClick={handleLinkClick}>Home</Link>
          <Link to={'shop'} onClick={handleLinkClick}>Products</Link>
          <Link to={'about'} onClick={handleLinkClick}>About</Link>
          <Link to={'contact'} onClick={handleLinkClick}>Contact</Link>
        </div>
        <div className="container__icons">
          <FaUser className='iconUser icon'/>
          <FaCartShopping className='iconCartShopping icon'/>
        </div>
      </div>
    </>
  );
};

export { MenuBurger };
