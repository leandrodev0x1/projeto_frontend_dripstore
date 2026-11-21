import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import cartIcon from '../../assets/mini-cart.svg';
import searchIcon from '../../assets/search-icon.svg';
import './style.css';

const links = [
  { text: 'Home', to: '/', end: true },
  { text: 'Produtos', to: '/produtos' },
  { text: 'Categorias', to: '/categorias' },
  { text: 'Meus Pedidos', to: '/pedidos' },
];

const Header = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const search = () => {
    const filter = term.trim();
    navigate(filter ? `/products?filter=${encodeURIComponent(filter)}` : '/products');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/"><Logo /></Link>

          <div className="header__search">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && search()}
            />
            <button type="button" aria-label="Buscar" onClick={search}>
              <img src={searchIcon} alt="" />
            </button>
          </div>

          <div className="header__actions">
            <Link to="/cadastro" className="header__signup">Cadastre-se</Link>
            <Link to="/login" className="header__login">Entrar</Link>
            <img src={cartIcon} alt="Carrinho" className="header__cart" />
          </div>
        </div>

        <nav className="header__nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
