import React from 'react'
import './App.css';
import Banner from './components/Banner/banner';
import Navbar from './components/navbar/navbar';
import Rowpost from './components/RowPost/rowpost';
import {originals,action } from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'  />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
