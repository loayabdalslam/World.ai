import React from 'react';
import { Terminal } from './components/Terminal';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ChatRoom } from './components/ChatRoom';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">
        <Dashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Terminal />
          <ChatRoom />
        </div>
      </main>
    </div>
  );
}

export default App;