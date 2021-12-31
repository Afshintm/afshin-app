import React from 'react';
import './App.css';
import Products from './Components/Products/Products';
import MockedProductList from './MockedProductList';

const App:React.FC=() => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <span>Header</span>
        </div>
      </header>
      <main className="App-main">
        <div>
          <Products Products={MockedProductList}></Products>
          <span>Main</span>
        </div>
      </main>
    </div>
  );
}

export default App;
