import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignIn from './pages/signInSignUp/SignInSignUp';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </div>
    </>
  );
}

export default App;
