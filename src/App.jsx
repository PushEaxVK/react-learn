import Header from './components/Header/Header';
import SectionTabs from './components/SectionTabs/SectionTabs';
import SectionHello from './components/SectionHello/SectionHello';
import SectionBooks from './components/SectionBooks/SectionBooks';
import IntroSection from './components/IntroSection/IntroSection';
import TabPagesSection from './components/TabPagesSection/TabPagesSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState('feedback');

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabPagesSection value={tab} callback={setTab} />

        {tab === 'main' && (
          <>
            <SectionHello />
            <SectionTabs />
            <SectionBooks />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
      </main>
    </>
  );
}

// TODO: Do something

export default App;
