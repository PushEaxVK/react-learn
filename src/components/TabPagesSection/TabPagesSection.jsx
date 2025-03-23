import css from './TabPagesSection.module.css';
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
    </section>
  );
};

export default TabPagesSection;
