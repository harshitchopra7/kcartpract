import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Mobiles from './Mobiles/Mobiles';
import Televisions from './Televisions/Televisions';
import LargeAppliances from './LargeAppliances/LargeAppliances';
import Fashion from './Fashion/Fashion';
import Sports from './Sports/Sports';
import 'tachyons';
import KitchenAppliances from './KitchenAppliances/KitchenAppliances';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mobiles">
            <Header />
            <Mobiles />
          </Route>
          <Route path="/televisons">
            <Header />
            <Televisions />
          </Route>
          <Route path="/large-appliances"> 
            <Header />
            <LargeAppliances />
          </Route>
          <Route path="/fashion">
            <Header />
            <Fashion />
          </Route>
          <Route path="/sports&fitness">
            <Header />
            <Sports />
          </Route>
          <Route path="/kitchen-appliances">
            <Header />
            <KitchenAppliances />  
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>Check Out</h1>
          </Route>
          <Route path="/contact">
            <Header />
            <h1>Contact</h1>
          </Route>
          <Route path="/myorders">
            <Header />
            <h1>My orders</h1>
          </Route>
          <Route path="/myaccount">
            <Header />
            <h1>My account</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>   
  );
}

export default App;
