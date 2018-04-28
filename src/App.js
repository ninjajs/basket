import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContainerList from './containers/ContainerList';
import ContainerBasket from './containers/ContainerBasket';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" render={(props) => (
              <div>
                <Link to="/checkout"><button className="checkout-btn purple"><ContainerBasket /></button></Link>
                <ContainerList />
                <Link to="/checkout"><button className="checkout-btn purple">Proceed to checkout</button></Link>
              </div>
            )}/>
            <Route path="/checkout" render={(props) => (
              <div>
                Checkout view
              </div>
            )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
