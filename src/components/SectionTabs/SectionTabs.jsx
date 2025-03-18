import Button from '../Button/Button';
import { useState } from 'react';
import { diff } from '../../data';

const SectionTabs = () => {
  const [contentType, setContentType] = useState(null);

  function clickHandler(type) {
    setContentType(type);
  }

  return (
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
  );
};
export default SectionTabs;
