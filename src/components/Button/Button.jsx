import './Button.css';

export default function Button({ children, onClick, isActive = false }) {
  return (
    <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
