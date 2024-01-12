import React from 'react';
import './App.css';
import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';


function App() {
  return (
    <div className="App-header">
    <div className="App">
      <h2>โหวตอาหาร</h2>
      <Block1 />
      <Block2 />
      <Block3 />
    </div>
    </div>
  );
}

export default App;