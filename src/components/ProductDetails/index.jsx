import Gallery from '../Gallery';
import BuyBox from '../BuyBox';
import ProductOptions from '../ProductOptions';
import { productImages, sizes, colors } from '../../data/products';
import './style.css';

// Junta galeria + buy box (+ opções) lado a lado na página do produto
const ProductDetails = ({ product }) => (
  <div className="product-details">
    <Gallery images={productImages} showThumbs width="700px" height="570px" radius="4px" />

    <BuyBox
      name={product.name}
      reference={product.reference}
      stars={product.stars}
      rating={product.rating}
      price={product.price}
      priceDiscount={product.priceDiscount}
      description={product.description}
    >
      <p className="buy-box__option-title">Tamanho</p>
      <ProductOptions options={sizes} shape="square" radius="4px" type="text" />
      <p className="buy-box__option-title">Cor</p>
      <ProductOptions options={colors} shape="circle" type="color" />
    </BuyBox>
  </div>
);

export default ProductDetails;
