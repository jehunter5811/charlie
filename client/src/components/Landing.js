import React, { Component } from 'react';
import { fetchWallets } from "../actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddTransactionButton from './AddTransactionButton';

class Landing extends Component {

componentDidMount() {
  this.props.fetchWallets();
}

  renderWallets() {
    return this.props.wallets.map(wallet => {

      return (
        <div key={wallet._id} className="container pubs">
          <a href={wallet.link}><h4>{wallet.title}</h4></a>
          <h5>Appears in {wallet.publicationName}</h5>
          <p>{wallet.body}...<a href={wallet.link}>check out more</a></p>
          <hr className="pubHR" />
        </div>

      );
    });
  }

  render() {

    return (
      <div className="pub-section">
        <h3 className="center-align">Publications</h3>
        <div>
          {this.renderWallets()}
        </div>
        <AddTransactionButton />
      </div>
    );
  }
}

function mapStateToProps({ wallets }, { auth }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(Landing);
