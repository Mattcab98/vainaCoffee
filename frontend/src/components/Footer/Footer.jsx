import './footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__section-logo">
                    <h2 className="footer__logo"><img src="/vainaLogo.png" alt="Vaina Café" /></h2>
                </div>

                <hr className="linea-divisoria" />
                
                <div className="footer__section-nav">
                    {/* <h3>Navegación</h3> */}
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/nosotros">Nosotros</a></li>
                        <li><a href="/contacto">Contacto</a></li>
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
