import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './components/pages/shop/ShopPage'
import HomePage from './components/pages/homepage/HomePage'
import './App.css';

const HatsPage = () => (
  <div>
    <p1>Hats</p1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component= {HomePage}/>
      <Route exact path="/shop" component= {ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;
