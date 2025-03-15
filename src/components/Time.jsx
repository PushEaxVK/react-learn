import { useEffect, useState } from 'react';

export default function Time() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{now}</span>;
}
