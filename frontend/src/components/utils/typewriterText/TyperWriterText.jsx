import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const TypewriterText = ({ text, speed = 0.095 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const letters = Array.from(text);

  // Contenedor que almacena todas las letras
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: speed },
    },
  };

  // Letras individuales
  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "tween", duration: 0.1 },
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

export { TypewriterText } ;
