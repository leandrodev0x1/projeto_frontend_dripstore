import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/produtos" element={<ProductListingPage />} />
    {/* A busca do cabeçalho redireciona para /products?filter=... */}
    <Route path="/products" element={<ProductListingPage />} />
    <Route path="/product/:id" element={<ProductViewPage />} />
  </Routes>
);

export default App;
