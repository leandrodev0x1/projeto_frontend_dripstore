import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import { homeSlides, collections, products } from '../../data/products';
import { handleImgError } from '../../utils/format';
import './style.css';

const HomePage = () => (
  <Layout>
    <Gallery className="home-gallery" images={homeSlides} width="1440" height="681" />

    <div className="container">
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="collections">
          {collections.map((c) => (
            <img key={c.src} src={c.src} alt={c.alt} onError={handleImgError} />
          ))}
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </div>
  </Layout>
);

export default HomePage;
