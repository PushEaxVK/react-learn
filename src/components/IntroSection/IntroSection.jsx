import css from './IntroSection.module.css';

const IntroSection = () => {
  return (
    <section>
      <h1 className={css.centered}>Lorem, ipsum.</h1>
      <h3 className={css.centered} style={{ color: '#666' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        illum.
      </h3>
    </section>
  );
};

export default IntroSection;
