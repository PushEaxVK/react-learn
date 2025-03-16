import Header from './components/Header/Header';
import { ways, diff } from './data';
import WayToLorem from './components/WayToLorem/WayToLorem';
import Button from './components/Button/Button';
import { useState } from 'react';

function App() {
  const [contentType, setContentType] = useState(null);

  function clickHandler(type) {
    setContentType(type);
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Hello React!</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>

          <ul>
            <WayToLorem
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToLorem {...ways[1]} />
            <WayToLorem {...ways[2]} />
            <WayToLorem {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <Button onClick={() => clickHandler('way')}>Way</Button>
          <Button onClick={() => clickHandler('easy')}>Easy</Button>
          <Button onClick={() => clickHandler('program')}>Program</Button>

          <p>{contentType ? diff[contentType] : 'Press button!'}</p>
        </section>
      </main>
    </>
  );
}

export default App;
