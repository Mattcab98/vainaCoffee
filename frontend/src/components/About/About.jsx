import './about.css';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TypewriterText = ({ text, speed = 0.095 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const letters = Array.from(text);

  // animacion framer Motion Typescripter

  //Contenedor que almacena todas las letras

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
      },
    },
  };

  // Letras individuales

  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.1,
      },
    },
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      style={{
        display: "inline",
        whiteSpace: "pre-wrap",
      }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline" }}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};


const About = () => {
  return (

    <section className='container__about'>
      <div className="txt__about">
        <h2>
          Vaina es café, pero también <span><TypewriterText text="es historia." /></span>
        </h2>
        <p>
          Somos Matias y Victoria.
          Amigos, familia, herederos de historias que nacían junto a una taza de café.

          Vaina nace del amor por nuestras raíces,
          del valor de lo simple:
          una charla, un aroma, un recuerdo.

          Es esencia, cultura y memoria.
          Porque en cada grano hay algo que nos trasciende.
          <br></br>
          Así somos. Así es <span>Vaina.</span>
        </p>
      </div>
    </section>


  );
};

export { About };


// <p className="txtAbout__desktop">
//     Somos Matías y Victoria.
// Amigos, familia, compañeros de historias.
// Nos une el amor por nuestras raíces y la nostalgia de aquellos relatos que nacían con cada taza que servían nuestros padres.
// Cientos de cafés, cientos de memorias.

// Vaina nace del valor de lo simple:
// una charla al atardecer,
// el aroma que abraza,
// una taza que une.

// Es cultura que se hereda,
// esencia que perdura,
// memoria que despierta.

// Un gesto cotidiano que, en silencio, cobra sentido.
// Porque en cada café se esconde un recuerdo,
// y en cada grano, un vínculo que nos trasciende.

// Así somos. Así es Vaina.
// </p>