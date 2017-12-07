import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const WalletReview = ({ onCancel, formValues, addWallet, history }) => {
  return (
    <div className="container">
      <div className="text-center review">
      <h4 className="center-align">Does this look good?</h4>
      <div className="container pubs">
        <h4>{formValues.title}</h4>
        <h5>Appears in {formValues.publicationName}</h5>
        <p>{formValues.body}...<a href={formValues.link}>check out more</a></p>
      </div>
      </div>
      <p className="center-align">
      <button className="btn center-align black" onClick={() => addWallet(formValues, history)}>
        Add
      </button>
      </p>

    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.walletForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(WalletReview));
