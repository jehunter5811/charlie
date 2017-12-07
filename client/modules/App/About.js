import React from 'react';
import charlie from './charlie.jpg';

export function About() {
  const pStyle = {
    margin: "30px",
    fontSize: "18px"
  };

  const charlieStyle = {
    height: "100px",
    width: "100px",
    borderRadius: "100%"
  };
  return (
    <div className="container">
      <p className="center-align">
        <img style={charlieStyle} src={charlie} alt="charlie allison" />
      </p>
      <h2 className="center-align">About Charles</h2>
      <p style={pStyle}>Charlie Allison surrounds himself with dying languages, fading pantheons and idle speculation. He has worn many hats: working as a chess coach, a groundskeeper, an English tutor, creative writing instructor for adults with learning disabilities, and an amateur circus acrobat. His current headwear is that of a graduate student at Arcadia University, where he works as a graduate assistant. He helps run a writing board called <a href="http://fitsofprint.proboards.com/" target="_blank"> “Fits of Print”</a> with some other genre writers–free proofreading, critiques, support and line edits, alongside copious nerd references.

      He lives in West Philadelphia. He is currently working on the draft of his second novel–after launching the first into space.
      </p>
      <p style={pStyle}>
        You can find him online at ‘Fits of Print’ and on Twitter <a href="https://twitter.com/cballison421" target="_blank">@cballison421</a>.
      </p>
    </div>
  );
}

export default About;
