import React from 'react';
import './App.css';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <span>Header</span>
        </div>
      </header>
      <main>
        <div>
          <Products></Products>
          <span>Main</span>
        </div>
      </main>
    </div>
  );
}

export default App;
