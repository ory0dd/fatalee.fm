import React from 'react';
import { useStore } from './store/useStore';
import { Sidebar } from './components/Layout/Sidebar';
import { TopBar } from './components/Layout/TopBar';
import { MainContent } from './components/Layout/MainContent';
import { PlaybackControls } from './components/Layout/PlaybackControls';

function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <PlaybackControls />
    </div>
  );
}

export default App;