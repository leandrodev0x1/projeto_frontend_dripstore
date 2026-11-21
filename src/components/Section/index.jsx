import { Link } from 'react-router-dom';
import './style.css';

const Section = ({ title, titleAlign = 'left', link, children }) => (
  <section className="section">
    <div className={`section__header section__header--${titleAlign}`}>
      <h2>{title}</h2>
      {link && (
        link.href.startsWith('/')
          ? <Link to={link.href} className="section__link">{link.text}</Link>
          : <a href={link.href} className="section__link">{link.text}</a>
      )}
    </div>
    {children}
  </section>
);

export default Section;
