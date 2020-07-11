import React from 'react';

import './Adulting.scss';

export default function Adulting() {

  return (
    <div className="adulting">
      <div className="label">
        <div className="title">
          Adulting Challenge
        </div>
        <div className="subtitle">
          Embedded persuasive design
        </div>
        <div className="tags">
          <div className="tag">
            Visual Design
          </div>
          <div className="tag">
            Prototyping
          </div>
        </div>
      </div>

      <img className="card1" src={require("./SVGs/Adulting/Card_1.svg")} />
      <img className="card2" src={require("./SVGs/Adulting/Card_2.svg")} />
      <img className="card3" src={require("./SVGs/Adulting/Card_3.svg")} />
      <div className="title">
        30-Day Adulting Challenge
      </div>
    </div>
  );
}

