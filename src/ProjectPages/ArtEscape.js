import React from 'react';

import './ArtEscape.scss';

export default function ArtEscape() {

  return (
    <div className="art-escape-case-study">
      <div className="top-content-container">
        <div className="page-title">Art Escape</div>
        <div className="page-subtitle">How can public art improve city livability?</div>
      </div>
      <img className="top-graphic" src={require("./Resources/ArtEscape/Top_graphic.svg")} />
      <img className="phone" src={require("./Resources/ArtEscape/Phone.svg")} />
      <div className="demo-pic-1">
        <img src={require("./Resources/ArtEscape/Demopic1.png")} />
        <div className="demo-1-text">A user trying out the Art Escape experience at our demo day.</div>
      </div>

      <div className="intro-content-container">
        <div className="solution-container box">
          <div className="header">
            Solution
          </div>
          <div className="body">
            We’ve built an experience to tackle the problem of civic engagement with public art, and finding ways to justify city spending on public art. We believe that our solution improves city livability by providing residents with a way to engage with art and gain stress-relief.
  <br />
            <br />
            Our solution is a method of interacting with public art which features a <b>smart bench</b>, <b>AR drawing app</b>, and <b>guided meditation</b>.
  <br />
            <br />
            Our team specifically has chosen to look at stress-relief as a mode through which the public can interact with public art. We consider our solution to be a way of providing stress-relief to city residents, improving city livability, and justifying the cost of public art.
          </div>
        </div>

        <div className="roles-container box">
          <div className="header">
            Roles
          </div>
          <div className="body">
            <div className="names">
              <ul>
                <li>
                  Gautham Sajith
              </li>
                <li>
                  Tina Chen
              </li>
                <li>
                  Zoe Lin
              </li>
                <li>
                  Mia Manavalan
              </li>
                <li>
                  Irene Yu
              </li>
              </ul>
            </div>

            <div className="roles">
              <ul>
                <li>
                  Design, Prototyping
              </li>
                <li>
                  User Research
              </li>
                <li>
                  Design
              </li>
                <li>
                  Project Manager
              </li>
                <li>
                  User Research
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-container">
        Overview
        <div className="overview-text-container">
          <div className="overview-row">
            <div className="overview-number">
              1
            </div>
            <div className="overview-text">
              We’ve employed user research methods such as observe and intercepts, think-aloud protocols,
              and storyboard speed-dating to gather data and test our hypotheses.
            </div>
          </div>
          <div className="overview-row">
            <div className="overview-number">
              2
            </div>
            <div className="overview-text">
              We’ve drawn several key insights about the public art and stress relief space which
              verified that public art can be a conduit for stress-relief, that people want
              tangible ways to interact with public art, and that narrative transportation in art can
              be a method of stress-relief.
            </div>
          </div>
          <div className="overview-row">
            <div className="overview-number">
              3
            </div>
            <div className="overview-text">
              Based on these insights, we’ve iteratively developed and tested our experience prototype solutions.
            </div>
          </div>
        </div>
      </div>

      <div className="research-container">
        <div className="research-card box">
          <div className="header">
            Research
          </div>
          <div className="body">
            <div className="bulleted-list">
              <div className="row">
                <div className="bullet">
                </div>
                <div className="list-item">
                  Observe and Intercept
                </div>
              </div>
              <div className="row">
                <div className="bullet">
                </div>
                <div className="list-item">
                  Think-Aloud Protocol
                </div>
              </div>
              <div className="row">
                <div className="bullet">
                </div>
                <div className="list-item">
                  Speed Dating
                </div>
              </div>
            </div>
            We employed a variety of user research techniques to both gather data and analyse this data to draw insights.
          </div>
        </div>
        <div className="intercepts-container">
          Blah blah
      </div>
      </div>

    </div>
  );
}

