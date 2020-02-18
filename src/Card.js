import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import DelayLink from './DelayLink'
import './Card.scss';

export default function Card(props) {
  const [clicked, setClicked] = useState(false);
  const [moved, setMoved] = useState(false);

  let card = props.card;

  const cardClick = () => {
    if (card.hovered) {
      setClicked(true);
      let projectElement = document.getElementById(card.key).childNodes[0].childNodes[0];

      const projectStyle = getComputedStyle(projectElement, null);
      var rect = projectElement.getBoundingClientRect();
      console.log(projectStyle)

      let cardElement = projectElement.childNodes[0].childNodes[0];
      const cardStyle = getComputedStyle(cardElement, null);
      console.log(cardStyle.background);

      let tempBox = document.createElement("div");
      tempBox.id = "tempBox";
      tempBox.style.background = cardStyle.background;
      tempBox.style.width = (rect.width - 50) + "px";
      tempBox.style.height = (rect.height - 50) + "px";
      tempBox.style.top = rect.top + "px";
      tempBox.style.left = rect.left + "px";
      tempBox.style.transform = projectStyle.transform;
      tempBox.style.position = "fixed";
      tempBox.style.borderRadius = projectStyle.borderRadius;
      tempBox.style.transition = "all 1000ms ease-out";

      setTimeout(() => {
        tempBox.style.width = "5000px";
        tempBox.style.height = "5000px";
        tempBox.style.top = "0px";
        tempBox.style.left = "0px";
        tempBox.style.transform = "none";
        tempBox.style.borderRadius = "0px";
      }, 100);

      document.body.appendChild(tempBox);
    }
  }

  const transitionToProjectPage = () => {
    let tempBox = document.getElementById("tempBox");
    tempBox.remove();
  }

  const mouseMove = () => {
    if (card.hovered && !moved) {
      setTimeout(() => {
        setMoved(true);
      }, 300);
    }
  }

  return (
    <DelayLink to={"/projects/" + card.key} delay={1500} onDelayEnd={transitionToProjectPage}>
      <Tilt className={("project" + ' ' + (moved ? 'moved' : '') + ' ' + (clicked ? 'clicked' : ''))}
        onEnter={() => { props.callback(card, true) }}
        onLeave={() => { props.callback(card, false); setMoved(false); setClicked(false); }}
        onMove={() => { mouseMove() }}
        tiltEnable={card.hovered}
        perspective="1000" >
        <div
          onClick={cardClick} className={(card.hovered ? 'project-content-hovered' : '') + ' ' + 'card'}>
          {card.content}
        </div>
      </Tilt >
    </DelayLink>
  );
}

