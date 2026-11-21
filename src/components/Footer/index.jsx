import Logo from '../Logo';
import Information from './Information';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import './style.css';

const company = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/pedidos' },
];

const categories = [
  { text: 'Camisetas', link: '/produtos' },
  { text: 'Calças', link: '/produtos' },
  { text: 'Bonés', link: '/produtos' },
  { text: 'Headphones', link: '/produtos' },
  { text: 'Tênis', link: '/produtos' },
];

const socials = [
  { icon: facebook, alt: 'Facebook', href: 'https://facebook.com' },
  { icon: instagram, alt: 'Instagram', href: 'https://instagram.com' },
  { icon: twitter, alt: 'Twitter', href: 'https://twitter.com' },
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__columns">
        <div className="footer__brand">
          <Logo variant="white" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.alt} href={s.href} target="_blank" rel="noreferrer">
                <img src={s.icon} alt={s.alt} />
              </a>
            ))}
          </div>
        </div>

        <Information title="Informação" informations={company} />
        <Information title="Categorias" informations={categories} />

        <div className="footer__info">
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <hr />
      <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
    </div>
  </footer>
);

export default Footer;
