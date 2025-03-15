import Time from './Time';
import vite from '/vite.svg';

export default function Header() {
  return (
    <header>
      <img src={vite} alt="vite logo" />
      <h3>Welcome!</h3>

      <span>
        Час зараз: <Time />
      </span>
    </header>
  );
}
