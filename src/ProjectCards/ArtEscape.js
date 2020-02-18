import React from 'react';

import './ArtEscape.scss';

export default function ArtEscape() {

  return (
    <div className="art-escape">
      <div className="label">
        <div className="title">
          Art Escape
        </div>
        <div className="subtitle">
          Public art and mindfulness
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

      <img className="sun" src={require("./SVGs/ArtEscape/Sun.svg")} />
      <img className="ground-back a" src={require("./SVGs/ArtEscape/Ground_back1.svg")} />
      <img className="ground-back b" src={require("./SVGs/ArtEscape/Ground_back2.svg")} />
      <img className="ground-back c" src={require("./SVGs/ArtEscape/Ground_back3.svg")} />

      <img className="title" src={require("./SVGs/ArtEscape/Title.svg")} />
      <img className="ground-middle c" src={require("./SVGs/ArtEscape/Ground_middle3.svg")} />
      <img className="ground-middle b" src={require("./SVGs/ArtEscape/Ground_middle2.svg")} />
      <img className="trees-middle" src={require("./SVGs/ArtEscape/Trees_middle.svg")} />
      <img className="ground-middle a" src={require("./SVGs/ArtEscape/Ground_middle1.svg")} />

      <img className="trees-back" src={require("./SVGs/ArtEscape/Trees_back.svg")} />
      <img className="trees-front" src={require("./SVGs/ArtEscape/Trees_front.svg")} />
      <img className="ground-front" src={require("./SVGs/ArtEscape/Ground_front.svg")} />

      <img className="dinosaur" src={require("./SVGs/ArtEscape/Dinosaur.svg")} />
      <img className="bench" src={require("./SVGs/ArtEscape/Bench.svg")} />
    </div>
  );
}

