import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Brands from './Brands/Brands';
import BrandDetail from './BrandDetail/BrandDetail';
import './App.scss';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Brands} />
            <Route exact path="/brand/:id" component={BrandDetail} />
          </Switch>
        </div>
      </section>
    );
  }
};

export default App;
