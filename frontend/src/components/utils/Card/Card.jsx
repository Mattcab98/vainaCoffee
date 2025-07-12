
import './card.css';

const Card = ({ imageUrl, title, description, price}
) => {
    return (
        <>
            <div className="card">
                <div className="container__imgProduct">
                    <img src={imageUrl} alt={title} className='card__img'/>
                </div>
                <h3 className='card__title'>{title}</h3>
                <p className='card__description'>{description}</p>
                <button className='card__car'>Añadir carrito</button>
                <p className='card__price'>$ {price},00</p>
            </div>
        </>
    )
}
export { Card };