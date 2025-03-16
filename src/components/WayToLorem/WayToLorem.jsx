import './WayToLorem.css';

export default function WayToLorem({ title, description }) {
  return (
    <li className="way">
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
