import Header from './components/Header';
import { ways } from './data';
import WayToLorem from './components/WayToLorem';
import Button from './components/Button/Button';

function App() {
  function clickHandler() {
    console.log('Hello React!');
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
          <Button onClick={clickHandler}>Hello</Button>
        </section>
      </main>
    </>
  );
}

export default App;
