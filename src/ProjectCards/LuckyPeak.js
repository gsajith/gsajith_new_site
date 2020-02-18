import React from 'react';

import './LuckyPeak.scss';

export default function LuckyPeak() {

  return (
    <div className="lucky-peak">
      <div className="label">
        <div className="title">
          Lucky Peak
        </div>
        <div className="subtitle">
          Goal-based climate action
        </div>
        <div className="tags">
          <div className="tag">
            User Research
          </div>
          <div className="tag">
            Prototyping
          </div>
        </div>
      </div>

      <div className="mask">
        <img className="top-bar" src={require("./SVGs/LuckyPeak/Top_bar.svg")} />
      </div>
      <img className="title" src={require("./SVGs/LuckyPeak/Title.svg")} />
      <img className="raid-card" src={require("./SVGs/LuckyPeak/Raid_card.svg")} />
      <img className="goals-card" src={require("./SVGs/LuckyPeak/Goals_card.svg")} />
      <img className="event-card" src={require("./SVGs/LuckyPeak/Event_card.svg")} />
      <img className="raids-button" src={require("./SVGs/LuckyPeak/Raids_button.svg")} />
    </div>
  );
}

