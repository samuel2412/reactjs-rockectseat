import React from 'react';
import './styles.css';

import Header from './components/Header';
import Routes from './routes';


//https://rocketseat-node.herokuapp.com/api

const App = () =>(
<div className="App">
    <Header/>
    <Routes></Routes>
  </div>

);

export default App;
