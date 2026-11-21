import { Link } from 'react-router-dom';

const Information = ({ title, informations = [] }) => (
  <div className="footer__info">
    <h4>{title}</h4>
    <ul>
      {informations.map((info) => (
        <li key={info.text}>
          <Link to={info.link}>{info.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Information;
