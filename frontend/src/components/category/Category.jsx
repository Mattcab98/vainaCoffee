import './category.css';
import { CardCategory } from '../utils/cardCategory/CardCategory';

const Category = () => {
  return (
    <>
      <div className="container__typeCategory">
        <CardCategory
          nameCategory="CAFÉ ESPECIALIDAD"
          className="typeCategory__coffee"
          backgroundImage="/images/category/backCategoryCafe.jpg"
        />
        <CardCategory
          nameCategory="CAFETERAS"
          className="typeCategory__coffee"
          backgroundImage="/images/category/backCategoryCafeteras.jpg"
        />
        <CardCategory
          nameCategory="HOME DECO"
          className="typeCategory__coffee"
          backgroundImage="/images/category/backCategoryDeco.jpg"
        />
      </div>
    </>
  );
};

export { Category };
