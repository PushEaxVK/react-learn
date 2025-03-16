import Header from './components/Header/Header';
import { ways } from './data';
import WayToLorem from './components/WayToLorem/WayToLorem';
import Button from './components/Button/Button';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState('Press button!');

  function clickHandler(type) {
    console.log('button clicked', type);
    setContent(`You clicked ${type}!`);
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

          <p>{content}</p>
        </section>
      </main>
    </>
  );
}

export default App;
