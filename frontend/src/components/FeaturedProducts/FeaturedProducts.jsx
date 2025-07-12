import './featuredProducts.css';
import { Card } from '../utils/Card/Card';
import { Products } from '../utils/Products'

const FeaturedProducts = () => {
  return (
    <>
      <div className="container__featuredProducts">
        {Products
          .filter(product => product.featuredProduct === true)
          .slice(0, 4)
          .map(product => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
    </>
  )
}

export { FeaturedProducts };