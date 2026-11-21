// As imagens ficam em `public/` e são referenciadas a partir da raiz (/arquivo).
const brands = ['K-Swiss', 'Nike', 'Adidas', 'Puma', 'K-Swiss', 'Nike', 'Adidas', 'Puma'];
const categories = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida', 'Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'];
const genders = ['Masculino', 'Feminino', 'Unisex', 'Masculino', 'Feminino', 'Unisex', 'Masculino', 'Feminino'];
const states = ['Novo', 'Novo', 'Usado', 'Novo', 'Usado', 'Novo', 'Novo', 'Usado'];

// Existem 5 miniaturas em public/ (product-thumb-1..5.jpeg); elas se repetem nos 8 produtos.
export const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: 'K-Swiss V8 - Masculino',
  image: `/product-thumb-${(i % 5) + 1}.jpeg`,
  price: i % 2 === 0 ? 200 : 49.9,
  priceDiscount: i % 2 === 0 ? 149.9 : undefined,
  brand: brands[i],
  category: categories[i],
  gender: genders[i],
  state: states[i],
  reference: `Casual | ${brands[i]} | REF:3841671${i}`,
  stars: 4.7,
  rating: '(90 avaliações)',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
}));

export const homeSlides = Array.from({ length: 8 }, (_, i) => ({
  src: `/home-slide-${i + 1}.jpeg`,
}));

export const collections = [
  { src: '/collection-1.png', alt: 'Novo drop Supreme' },
  { src: '/collection-2.png', alt: 'Coleção Adidas' },
  { src: '/collection-3.png', alt: 'Novo Beats Bass' },
];

// Os arquivos no repositório se chamam "produc-image-N.jpeg" (sem o "t").
export const productImages = [1, 2, 3, 4, 5].map((n) => ({ src: `/produc-image-${n}.jpeg` }));

export const sizes = ['39', '40', '41', '42', '43'];
export const colors = ['#6FEEFF', '#FF6C6C', '#202020', '#6D70B7'];
