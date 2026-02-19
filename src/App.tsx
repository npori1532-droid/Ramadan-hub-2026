import { useState } from 'react';
import { AudioProvider } from './context/AudioContext';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { PlayerBar } from './components/quran/PlayerBar';
import { Home } from './pages/Home';
import { Quran } from './pages/Quran';
import { Dua } from './pages/Dua';
import { Names } from './pages/Names';
import { Tasbeeh } from './pages/Tasbeeh';
import { Amol } from './pages/Amol';
import { Calendar } from './pages/Calendar';
import { RamadanBackground } from './components/3d/RamadanBackground';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'calendar': return <Calendar />;
      case 'quran': return <Quran />;
      case 'dua': return <Dua />;
      case 'names': return <Names />;
      case 'tasbeeh': return <Tasbeeh />;
      case 'amol': return <Amol />;
      default: return <Home />;
    }
  };

  return (
    <AudioProvider>
      <div className="min-h-screen relative font-sans text-slate-900 flex flex-col overflow-hidden">
        <RamadanBackground />
        
        <div className="max-w-md mx-auto w-full flex-1 flex flex-col relative z-10">
          <Header />
          
          <main className="flex-1 p-5 mb-20 overflow-y-auto scrollbar-hide">
            {renderPage()}
          </main>

          <PlayerBar />
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </AudioProvider>
  );
}
