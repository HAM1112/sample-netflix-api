import React from 'react'
import './App.css';
import Banner from './components/Banner/banner';
import Navbar from './components/navbar';
import Rowpost from './components/RowPost/rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;
