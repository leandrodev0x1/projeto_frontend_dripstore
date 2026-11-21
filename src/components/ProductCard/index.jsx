import { Link } from 'react-router-dom';
import { formatPrice, handleImgError } from '../../utils/format';
import './style.css';

// Aceita `image` (padrão dos dados) ou `imagem` (nome citado no README)
const ProductCard = ({ id, image, imagem, name, price, priceDiscount }) => {
  const card = (
    <div className="product-card">
      <div className="product-card__image">
        {priceDiscount && (
          <span className="product-card__tag">
            {Math.round((1 - priceDiscount / price) * 100)}% OFF
          </span>
        )}
        <img src={image || imagem} alt={name} width="292" height="321" onError={handleImgError} />
      </div>
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__prices">
        {priceDiscount ? (
          <>
            <span className="product-card__old">{formatPrice(price)}</span>
            <span className="product-card__price">{formatPrice(priceDiscount)}</span>
          </>
        ) : (
          <span className="product-card__price">{formatPrice(price)}</span>
        )}
      </div>
    </div>
  );

  return id ? <Link to={`/product/${id}`}>{card}</Link> : card;
};

export default ProductCard;
