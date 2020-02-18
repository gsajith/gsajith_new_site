import React from 'react';

import './Resolution.scss';

export default function Resolution() {

  return (
    <div className="resolution">
      <div className="label">
        <div className="title">
          Resolution
        </div>
        <div className="subtitle">
          Tracking app for sleep apnea devices
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


      <img className="title" src={require("./SVGs/Resolution/Title.svg")} />
      <img className="sentiment-buttons" src={require("./SVGs/Resolution/Sentiment_buttons.svg")} />
      <img className="blue-shape" src={require("./SVGs/Resolution/Blue_shape.svg")} />
      <img className="graph" src={require("./SVGs/Resolution/Graph.svg")} />
      <img className="graph-tooltip" src={require("./SVGs/Resolution/Graph_tooltip.svg")} />
      <img className="leak-alert" src={require("./SVGs/Resolution/Leak_alert.svg")} />
      <img className="new-device" src={require("./SVGs/Resolution/New_device.svg")} />
      <img className="pie-chart" src={require("./SVGs/Resolution/Pie_chart.svg")} />
      <img className="date-picker" src={require("./SVGs/Resolution/Date_picker.svg")} />
    </div>
  );
}

