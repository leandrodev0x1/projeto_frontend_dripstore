import starIcon from '../../assets/star-icon.svg';
import { formatPrice } from '../../utils/format';
import './style.css';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => (
  <div className="buy-box">
    <h1 className="buy-box__name">{name}</h1>
    <p className="buy-box__reference">{reference}</p>

    <div className="buy-box__rating">
      <span className="buy-box__stars">
        {stars} <img src={starIcon} alt="estrelas" />
      </span>
      <span className="buy-box__count">{rating}</span>
    </div>

    <div className="buy-box__prices">
      {priceDiscount ? (
        <>
          <span className="buy-box__price buy-box__price--old">{formatPrice(price)}</span>
          <span className="buy-box__price">{formatPrice(priceDiscount)}</span>
        </>
      ) : (
        <span className="buy-box__price">{formatPrice(price)}</span>
      )}
    </div>

    <p className="buy-box__description-label">Descrição do produto</p>
    <p className="buy-box__description">{description}</p>

    {children}

    <button type="button" className="buy-box__cta">COMPRAR</button>
  </div>
);

export default BuyBox;
