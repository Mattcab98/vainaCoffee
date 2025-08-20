import './footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__section-logo">
                    <h2 className="footer__logo"><img src="/logoVainaSombrero.png" alt="Vaina Café" /></h2>
                </div>

                <hr className="linea-divisoria" />
                
                <div className="footer__section-nav">
                    {/* <h3>Navegación</h3> */}
                    <ul>
                        <Link to='/'>Inicio</Link>
                        <Link to='/shop'>Productos</Link>
                        <Link to='/about'>Nosotros</Link>
                        <Link to='/contact'>Contacto</Link>
                    </ul>
                </div>

                <hr className="linea-divisoria" />
            </div>

            <div className="footer__social">
                <a href="https://www.instagram.com/vaina.coffee/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/5493517543408" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </a>
            </div>
            <div className="footer__bottom">
                <p>© 2025 Vaina Café de Especialidad. Todos los derechos reservados.</p>
                <p className="footer__credit">Diseño & desarrollo web - Matias Alvarez.
                </p>
            </div>
        </footer>
    );
};

export { Footer };
