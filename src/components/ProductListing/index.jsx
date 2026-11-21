import ProductCard from '../ProductCard';
import './style.css';

const ProductListing = ({ products = [], columns = 4 }) => (
  <div className="product-listing" style={{ '--columns': columns }}>
    {products.map((p, i) => (
      <ProductCard key={p.id ?? i} {...p} />
    ))}
  </div>
);

export default ProductListing;
