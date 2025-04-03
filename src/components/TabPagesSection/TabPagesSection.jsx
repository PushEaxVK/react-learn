import Button from '../Button/Button';

const TabPagesSection = ({ value, callback, keys }) => {
  return (
    <section style={{ marginBottom: '1rem' }}>
      {keys.map(tabKey => (
        <Button
          key={tabKey}
          isActive={value === tabKey}
          onClick={() => callback(tabKey)}
        >
          {tabKey}
        </Button>
      ))}
    </section>
  );
};

export default TabPagesSection;
