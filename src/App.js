import React from 'react';
import InputDemo from './components/InputDemo';
import DragDemo from './components/DragDemo';
import './App.css';
import { Counter } from './counter/counter';

const App = () => (
  <div className="App">
    <Counter/>
    <InputDemo/>
    <DragDemo/>
  </div>
);

export default App;