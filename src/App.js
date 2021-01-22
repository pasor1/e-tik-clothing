import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop/hats" exact component={HatsPage} />
      </Switch>
    </>
  );
}

export default App;
