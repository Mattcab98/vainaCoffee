import './category.css';
import { CardCategory } from '../utils/cardCategory/CardCategory';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <div className="container__typeCategory">
        
        <Link to='cafeEspecialidad'>
          <CardCategory
            nameCategory="CAFÉ ESPECIALIDAD"
            className="typeCategory__coffee cafeEspecial"
            backgroundImage="/images/category/backCategoryCafe.jpg"
          />
        </Link>

        <Link to='cafeteras'>
          <CardCategory
            nameCategory="CAFETERAS"
            className="typeCategory__coffee cafeteras"
            backgroundImage="/images/category/backCategoryCafeteras.jpg"
          />
        </Link>

        <Link to={'homeDeco'}>
          <CardCategory
            nameCategory="HOME DECO"
            className="typeCategory__coffee homeDeco"
            backgroundImage="/images/category/backCategoryDeco.jpg"
          />
        </Link>

      </div>
    </>
  );
};

export { Category };
