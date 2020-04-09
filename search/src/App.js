import React from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';

function App() {
  return (
    <div className="app__container">
      <h1>Find a Recipe:</h1>
      <input type="text" placeholder="E.g. steak, baked chicken, cookies..." />
      <Results />
    </div>
  );
}

export default App;
