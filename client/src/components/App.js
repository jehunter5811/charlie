import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import Header from './Header';
import Landing from './Landing';
import Wallets from './Wallets';
import Billing from './Billing';
import New from './New';
import Dashboard from "./Dashboard";
import NewTransaction from "./NewTransaction";
import Delete from "./Delete";
import About from './About';
import Footer from './Footer';
import Admin from './Admin';
// const Settings = () => <h2>Settings</h2>;
// const Wallets = () => <h2>Wallets</h2>;
// const Transactions = () => <h2>Transactions</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/about" component={About} />
            <Route path='/new/publication' component={New} />
            <Route exact path="/wallets" component={Wallets} />
            <Route exact path="/billing" component={Billing} />

            <Route exact path="/wallets/delete" component={Delete} />
            <Route exact path="/transactions/new" component={NewTransaction} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
