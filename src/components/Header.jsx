import Time from './Time';

export default function Header() {
  return (
    <header>
      <h3>Welcome!</h3>

      <span>
        Час зараз: <Time />
      </span>
    </header>
  );
}
