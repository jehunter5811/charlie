// import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import DocField from "./DocField";
import DocTextArea from "./DocTextArea";
import "./App.css";

class WalletForm extends Component {
  renderFields() {
    return (
      <div className="container">
      <Field
        label="Title of your work"
        type="text"
        name="title"
        component={DocField}
        placeholder="Title of your work"
      />
      <Field
        label="Link to published work"
        type="text"
        name="link"
        component={DocField}
        placeholder="Link to published work"
      />
      <Field
        label="Publication Name"
        type="text"
        name="publicationName"
        component={DocField}
        placeholder="Name of publication"
      />
      <Field
        label="Short Blurb"
        type="text"
        name="body"
        component={DocTextArea}
        placeholder="One-paragraph blurb"
      />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="addWallet">
          <div className="text-center">
            <form className="addwalletform"
              onSubmit={this.props.handleSubmit(this.props.onWalletSubmit)}
            >
              {this.renderFields()}
              <p className="center-align">
              <Link to={"/"}><button className="btn grey cancel">Cancel</button></Link>
                <button className="btn black" type="submit">
                  Next
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="addTransactionButton">
          <a href="/transactions/new" className="text-center plus-sign">
            +
          </a>
        </div>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = "Your masterpiece deserves a name";
  }

  if (!values.link){
    errors.title = "Don't forget to link back to the publisher";
  }

  if (!values.publicationName){
    errors.title = "Give credit where credit is due";
  }

  if(!values.body){
    errors.body = "Blurb! You need a blurb!"
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "walletForm",
  destroyOnUnmount: false
})(WalletForm);
