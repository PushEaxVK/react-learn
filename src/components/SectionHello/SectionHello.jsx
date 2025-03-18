import { ways } from '../../data';
import WayToLorem from '../WayToLorem/WayToLorem';

function SectionHello() {
  return (
    <section>
      <h1>Hello React!</h1>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>Some changes!</p>
      <p>New changes!</p>

      <ul>
        {ways.map(way => (
          <WayToLorem key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}

export default SectionHello;
