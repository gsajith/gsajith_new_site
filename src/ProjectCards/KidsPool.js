import React from 'react';

import './KidsPool.scss';

export default function KidsPool() {

  return (
    <div className="kidspool">
      <div className="label">
        <div className="title">
          KidsPool
        </div>
        <div className="subtitle">
          Fair and friendly carpools
        </div>
        <div className="tags">
          <div className="tag">
            UX Design
          </div>
          <div className="tag">
            Visual Design
          </div>
        </div>
      </div>

      <img className="rect" src={require("./SVGs/KidsPool/Rect.svg")} />
      <img className="message-glow" src={require("./SVGs/KidsPool/Message_glow.svg")} />
      <img className="top-bar" src={require("./SVGs/KidsPool/Top_bar.svg")} />
      <img className="bottom-sheet" src={require("./SVGs/KidsPool/Bottom_sheet.svg")} />
      <img className="logo" src={require("./SVGs/KidsPool/Logo.svg")} />
      <img className="message-1" src={require("./SVGs/KidsPool/Message_1.svg")} />
      <img className="message-2" src={require("./SVGs/KidsPool/Message_2.svg")} />
      <img className="driving-card" src={require("./SVGs/KidsPool/Driving_card.svg")} />
      <img className="car" src={require("./SVGs/KidsPool/Car.svg")} />
    </div>
  );
}

