import Button from '../Button/Button';

const TabPagesSection = ({ value, callback }) => {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={value === 'main'} onClick={() => callback('main')}>
        Main
      </Button>
      <Button
        isActive={value === 'feedback'}
        onClick={() => callback('feedback')}
      >
        Feedback
      </Button>
      <Button isActive={value === 'effect'} onClick={() => callback('effect')}>
        Effects
      </Button>
    </section>
  );
};

export default TabPagesSection;
