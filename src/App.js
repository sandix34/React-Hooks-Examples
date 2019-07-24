import React from 'react';
import Like from './components/Like';
import FrameworkList from './components/FrameworkList';
import PostList from './components/PostList';
import Calculator from './components/Calculator';
import LevelA from './components/LevelA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Like/>
        <FrameworkList/>
        <PostList/>
        <Calculator/>
        <LevelA/>
      </header>
    </div>
  );
}

export default App;
