import Button from '../Button/Button';

const EffectsSection = () => {
  const openModal = () => {
    alert('Opening modal');
  };

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open info</Button>
    </section>
  );
};
export default EffectsSection;
