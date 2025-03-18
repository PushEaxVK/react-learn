import clsx from 'clsx';
import './Button.css';

export default function Button({ children, onClick, isActive = false }) {
  const className = clsx('button', isActive && 'active');
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
