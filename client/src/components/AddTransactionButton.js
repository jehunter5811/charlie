import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import "./App.css";


class AddTransactionButton extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
          </div>
        );
      default:
        return (
          <div>
          <Link to={'/new/publication'}>
            <div className="fixed-action-btn">
              <a className="btn-floating btn-large black">
                <i className="large material-icons">add</i>
              </a>
            </div>
          </Link>
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

export default connect(mapStateToProps, actions)(AddTransactionButton);
