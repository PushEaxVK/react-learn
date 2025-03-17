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
            {ways.map(way => (
              <WayToLorem key={way.title} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <Button
            isActive={contentType === 'way'}
            onClick={() => clickHandler('way')}
          >
            Way
          </Button>
          <Button
            isActive={contentType === 'easy'}
            onClick={() => clickHandler('easy')}
          >
            Easy
          </Button>
          <Button
            isActive={contentType === 'program'}
            onClick={() => clickHandler('program')}
          >
            Program
          </Button>

          {/* <p>{contentType ? diff[contentType] : 'Press button!'}</p> */}

          {contentType && <p>{diff[contentType]}</p>}
          {!contentType && <p>Press button!</p>}
        </section>
      </main>
    </>
  );
}

export default App;
