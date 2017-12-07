import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const pencil = require('./pencil.png');

class Header extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="background-header">
        <div className="container">
          <div className="backgroundDiv">
            <Link to={"/"}><h1 className="left-align">Charlie Allision</h1></Link>
            <h4 className="left-align">Auther, speaker, researcher</h4>
          </div>
          <div>
            <Link to={"/"}><p className="right-align">Publications</p></Link>
            <Link to={"/about"}><p className="right-align">About</p></Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
