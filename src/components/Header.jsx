import { useEffect, useState } from 'react';

export default function Header() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <h3>Welcome!</h3>

      <span>Час зараз: {now}</span>
    </header>
  );
}
