import React from 'react';
import css from './IntroSection.module.css';

function IntroSection() {
  return React.createElement('section', { style: { marginBottom: '1rem' } }, [
    React.createElement(
      'h1',
      { className: css.centered, key: 1 },
      'Lorem, ipsum.'
    ),
    React.createElement(
      'h3',
      { className: css.centered, style: { color: '#666' }, key: 2 },
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum.'
    ),
  ]);
}

// const IntroSection = () => {
//   return (
//     <section>
//       <h1 className={css.centered}>Lorem, ipsum.</h1>
//       <h3 className={css.centered} style={{ color: '#666' }}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
//         illum.
//       </h3>
//     </section>
//   );
// };

export default IntroSection;
