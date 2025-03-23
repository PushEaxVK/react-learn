import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({ children, isActive = false, ...props }) {
  const className = clsx(css.button, isActive && css.active);
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
