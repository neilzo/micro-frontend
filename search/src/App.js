import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app__container">
      <label htmlFor="findRecipe">Find a Recipe:</label>
      <input id="findRecipe" type="text" placeholder="E.g. steak, baked chicken, cookies..." />
    </div>
  );
}

export default App;
