import React from 'react';
import Like from './components/Like';
import FrameworkList from './components/FrameworkList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Like/>
        <FrameworkList/>
      </header>
    </div>
  );
}

export default App;
