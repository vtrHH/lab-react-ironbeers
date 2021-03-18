import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import NewBeer from './views/NewBeer';
import Beers from './views/Beers';
import RandomBeer from './views/RandomBeer';
import SingleBeer from './views/SingleBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={Beers} exact />
          <Route path="/beers/:beerId" component={SingleBeer} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
