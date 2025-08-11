import './about.css';
import { TypewriterText } from '../utils/typewriterText/TyperWriterText';

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
