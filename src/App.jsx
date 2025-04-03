import Header from './components/Header/Header';
import SectionTabs from './components/SectionTabs/SectionTabs';
import SectionHello from './components/SectionHello/SectionHello';
import SectionBooks from './components/SectionBooks/SectionBooks';
import IntroSection from './components/IntroSection/IntroSection';
import TabPagesSection from './components/TabPagesSection/TabPagesSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import { useState } from 'react';
import EffectsSection from './components/EffectsSection/EffectsSection';
import GridSection from './components/GridSection/GridSection';

function App() {
  const [tab, setTab] = useState('Feedback');

  const tabs = {
    Main: (
      <>
        <SectionHello />
        <SectionTabs />
        <SectionBooks />
      </>
    ),
    Feedback: <FeedbackSection />,
    Effect: <EffectsSection />,
    Grids: <GridSection />,
  };

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabPagesSection
          value={tab}
          callback={setTab}
          keys={Object.keys(tabs)}
        />

        {tabs[tab]}
      </main>
    </>
  );
}

// TODO: Do something

export default App;
