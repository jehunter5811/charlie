import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {

    const d = new Date();
    const n = d.getFullYear();
    return (
      <div style={{ background: `#fff` }} className="footer">
      <hr />
        <p>&copy; {n} &middot; Charles Allison</p>
        <p>Check me on out Twitter : <a href="https://twitter.com/cballison421" target="_Blank">@cballison421</a></p>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Footer);
