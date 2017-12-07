import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import "./App.css";


class Admin extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <div className="welcome center-align">
              <h3>Welcome back, Charlie! Sign in to update your site.</h3>
              
              <a href="/auth/twitter" className="waves-effect btn blue"><i className="material-icons left">lock_outline</i>Sign in with Twitter</a>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div className="welcome center-align">
              <h3>All done? Sign out below</h3>
              <a href="/api/logout" className="waves-effect black btn"><i className="material-icons left">lock_outline</i>Sign out</a>
            </div>
          </div>
        );
      }
    }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth, form }) {
  return { auth, form };
}

export default connect(mapStateToProps, actions)(Admin);
