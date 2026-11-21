import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import ProductDetails from '../../components/ProductDetails';
import { products } from '../../data/products';

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container">
        <ProductDetails product={product} />

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          <ProductListing products={related} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
