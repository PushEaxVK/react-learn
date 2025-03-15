export default function Header() {
  return (
    <header>
      <h3>Welcome!</h3>

      <span>Час зараз: {new Date().toLocaleTimeString()}</span>
    </header>
  );
}
