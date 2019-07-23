import React from 'react';
import Like from './components/Like';
import FrameworkList from './components/FrameworkList';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Like/>
        <FrameworkList/>
        <PostList/>
      </header>
    </div>
  );
}

export default App;
