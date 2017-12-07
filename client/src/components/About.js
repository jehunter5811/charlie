import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddTransactionButton from './AddTransactionButton';
import charlie from './charlie.jpg';

class About extends Component {

  render() {
    return (
      <div className="container">
        <p className="center-align">
        <img className="charlieStyle" src={charlie} alt="charlie allison" />
        </p>
        <div className="about-section">
          <h2 className="center-align">About Charlie</h2>
          <p>Charlie Allison surrounds himself with dying languages, fading pantheons and idle speculation. He has worn many hats: working as a chess coach, a groundskeeper, an English tutor, creative writing instructor for adults with learning disabilities, and an amateur circus acrobat.
          </p>
          <p>
          His current headwear is that of a graduate student at Arcadia University, where he works as a graduate assistant. He helps run a writing board called <a href="http://fitsofprint.proboards.com/" target="_blank"> “Fits of Print”</a> with some other genre writers–free proofreading, critiques, support and line edits, alongside copious nerd references.

          He lives in West Philadelphia. He is currently working on the draft of his second novel–after launching the first into space.
          </p>
          <p>
            You can find him online at ‘Fits of Print’ and on Twitter <a href="https://twitter.com/cballison421" target="_blank">@cballison421</a>.
          </p>
        </div>
        <AddTransactionButton />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(About);
