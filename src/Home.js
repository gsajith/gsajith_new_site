import React from 'react';
import DelayLink from './DelayLink'

import './Home.scss';

export default function Home() {

  const transitionToSubPage = (e) => {
    var linkText = e.target;
    var rect = linkText.getBoundingClientRect();
    var style = window.getComputedStyle(linkText, null);
    var tempText = document.createElement("div");
    tempText.id = "tempText";
    tempText.innerText = linkText.innerText;
    tempText.classList.add("nav-item-hover");
    tempText.style.position = "fixed";
    tempText.style.width = rect.width + "px";
    tempText.style.height = rect.height + "px";
    tempText.style.top = rect.top + "px";
    tempText.style.fontSize = style.getPropertyValue('font-size');
    tempText.style.lineHeight = style.getPropertyValue('line-height');
    tempText.style.paddingLeft = style.getPropertyValue('padding-left');
    tempText.style.letterSpacing = style.getPropertyValue('letter-spacing');
    tempText.style.transition = "all 600ms ease-out";

    setTimeout(() => {
      tempText.style.width = "100%";
      tempText.style.height = "100%";
      tempText.style.paddingTop = tempText.style.top;
      tempText.style.top = "0px";

      setTimeout(() => {
        tempText.style.paddingTop = "31px";
      }, 500);
    }, 1);
    document.body.appendChild(tempText);
  }

  return (
    <>
      <div id="name-container">
        <div id="name-hover">
          <div className="name">Gautham<br /><span className="last-name">Sajith</span></div>
        </div>
        <div className="name">Gautham<br /><span className="last-name">Sajith</span></div>
      </div>

      <div id="resume-icon-container">
        <div id="resume-icon-hover">
          <div className="resume-icon">
            <img src="https://cdn.glitch.com/4d8526f7-5889-4712-8525-d8db84ceab8e%2Fbx_bx-file-white.svg?v=1580758633988" alt="Resume icon" />
          </div>
        </div>

        <div className="resume-icon">
          <img src="https://cdn.glitch.com/4d8526f7-5889-4712-8525-d8db84ceab8e%2Fbx_bx-file.svg?v=1580758354974" alt="Resume icon" />
        </div>
      </div>

      <div id="nav-container">
        <DelayLink to="/design" delay={1100} onDelayStart={transitionToSubPage}>
          <div id="design" className="nav-item">
            <div className="nav-item-hover">
              design
            </div>
            <div className="nav-item-text">
              design
          </div>
          </div>
        </DelayLink>
        <DelayLink to="/code" delay={1100} onDelayStart={transitionToSubPage}>
          <div id="code" className="nav-item">
            <div className="nav-item-hover">
              code
        </div>
            <div className="nav-item-text">
              code
        </div>
          </div>
        </DelayLink>
        <DelayLink to="/other" delay={1100} onDelayStart={transitionToSubPage}>
          <div id="other" className="nav-item">
            <div className="nav-item-hover">
              other
        </div>
            <div className="nav-item-text">
              other
        </div>
          </div>
        </DelayLink>
      </div>
    </>
  );
}
