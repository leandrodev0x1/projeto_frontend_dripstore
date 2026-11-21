import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

// variant="white" renderiza a logo branca (usada no rodapé)
const Logo = ({ variant = 'default' }) => (
  <img
    src={variant === 'white' ? logoFooter : logoHeader}
    alt="Digital Store"
    width="253"
    height="44"
  />
);

export default Logo;
