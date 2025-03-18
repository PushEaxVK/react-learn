import Time from '../Time';
import vite from '/vite.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={vite} alt="vite logo" />
      <h3>Welcome!</h3>

      <span>
        Час зараз: <Time />
      </span>
    </header>
  );
}

export default Header;
