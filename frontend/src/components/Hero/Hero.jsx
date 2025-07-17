import './Hero.css';

import { heroImages } from './HeroImages'
import { ButtonAction } from '../utils/buttonAction/ButtonAction';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentImage = heroImages[currentIndex] || heroImages[0];

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % heroImages.length;
            const image = new Image();
            image.src = heroImages[nextIndex].src;

            image.onload = () => {
                setCurrentIndex(nextIndex);
            }

        }, 5000);

        return () => {
            clearInterval(interval);
        }
    }, [currentIndex]);

    return (

        <>


            <div className='container__hero'>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage.src}
                        src={currentImage.src}
                        alt={currentImage.alt}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="slider-image"
                    />
                </AnimatePresence>
                <div className="gradient__hero"></div>
                <div className="txt__hero">
                    <h1>Un aroma en cada grano, una historia en cada taza.</h1>
                    <h2>Momentos que se disfrutan en cada sorbo, aromas que despiertan recuerdos y sabores que invitan a volver.</h2>
                    <ButtonAction nameButton={'Conoce nuestras variedades'} />
                </div>
            </div>
        </>

    )
}
export { Hero };