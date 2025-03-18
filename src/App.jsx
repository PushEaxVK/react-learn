import Header from './components/Header/Header';
import SectionTabs from './components/SectionTabs/SectionTabs';
import SectionHello from './components/SectionHello/SectionHello';
import SectionBooks from './components/SectionBooks/SectionBooks';

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionHello />
        <SectionTabs />
        <SectionBooks />
      </main>
    </>
  );
}

// TODO: Do something

export default App;
