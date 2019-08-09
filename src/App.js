import React from 'react';

import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";


const App = () => (
  <div className="App">
    <Navigation />
    
      <Route exact path="/" component={Home} />
      <Route path="/about.js" component={About} />
      <Route path="/contact.js" component={Contact} />
  </div>
);

export default App;
