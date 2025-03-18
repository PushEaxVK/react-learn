import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({ children, onClick, isActive = false }) {
  const className = clsx(css.button, isActive && css.active);
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
