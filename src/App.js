//import logo from './logo.svg';
import React from 'react';
import './App.css';

import Banner from './components/navbar/banner/banner';
import Navbar from './components/navbar/navbar';
import RowPost from './components/RowPost/RowPost';
import { action, comedy, horror, orginals } from './url'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost  url={action} title='Action' isSmall/>
      <RowPost  url={comedy} title='ComedyMovies' isSmall/>
      <RowPost  url={horror} title='HorrorMovies' isSmall/>
    </div>
  );
}

export default App;
