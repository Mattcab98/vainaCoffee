import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';
import './menuBurger.css';
import { FaBars, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSubmit = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.display = 'flex'; // mostrás antes de animar
      gsap.to(menuRef.current, {
        clipPath: 'circle(150% at 90% 5%)',
        duration: 1,
        ease: 'power3.out',
      }); 
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at 90% 5%)',
        duration: 1,
        ease: 'power3.in',
        onComplete: () => {
          menuRef.current.style.display = 'none';
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
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="container__icons">
          <FaUser />
          <FaCartShopping />
        </div>
      </div>
    </>
  );
};

export { MenuBurger };
