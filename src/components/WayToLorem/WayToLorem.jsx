import css from './WayToLorem.module.css';

export default function WayToLorem({ title, description }) {
  return (
    <li className={css.way}>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
