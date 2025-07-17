import './featuredProducts.css';
import { Card } from '../utils/Card/Card';
import { ButtonAction } from '../utils/buttonAction/ButtonAction'
import { Products } from '../utils/Products'

const FeaturedProducts = () => {
  return (
    <>
      <div className='container__featuredProducts'>

        <div className="container__featuredProducts-card">
          {Products
            .filter(product => product.featuredProduct === true)
            .slice(0, 4)
            .map(product => (
              <Card
                className='card-efect'
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
        </div>
        <ButtonAction nameButton={'Ver más productos'} />
      </div>

    </>
  )
}

export { FeaturedProducts };