import './aboutDetails.css';
import { TypewriterText } from '../../utils/typewriterText/TyperWriterText';
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const ImageCard = ({ src, alt }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="card__imgAbout"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
        >
            <img src={src} alt={alt} />
        </motion.div>
    );
};

const AboutDetails = () => {
    const images = ["./images/profile/profile1.jpg", "./images/profile/profile2.jpg"];

    return (
        <section className='container__aboutDetails'>

            <div className='aboutDetails'>
                <h2>
                    Vaina es café, pero también <span><TypewriterText text="es historia." /></span>
                </h2>
                <p>
                    Somos Matías y Victoria, unidos por la amistad, la familia y una herencia que comenzó
                    mucho antes de nosotros: el ritual de compartir un café.
                </p>
                <p>
                    Vaina nació del amor por nuestras raíces y por el valor de lo simple:
                    una conversación sin prisa, un aroma que te envuelve, un sabor que te transporta.
                </p>
                <p>
                    Creemos que cada taza cuenta una historia, y que cada grano guarda en su interior
                    el trabajo de manos que cultivan, cuidan y sueñan.
                    Apostamos por cafés de especialidad que respetan el origen y la tierra que los vio crecer.
                </p>
                <p>
                    Vaina es esencia, cultura y memoria.
                    Es un puente entre quienes producen con pasión y quienes disfrutan cada sorbo.
                    Porque el café no solo se bebe: se vive, se recuerda y se comparte.
                </p>
                <p>
                    Así somos. Así es <span>Vaina.</span>
                </p>
            </div>

            <div className="aboutDetails__img">
                {images.map((src, i) => (
                    <ImageCard key={i} src={src} alt={`Foto ${i + 1}`} />
                ))}
            </div>
            
        </section>
    );
};

export { AboutDetails };
