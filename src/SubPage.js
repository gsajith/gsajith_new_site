import React, { useEffect, useState, useRef } from 'react';

import Card from './Card';

import ArtEscape from './ProjectCards/ArtEscape';
import Resolution from './ProjectCards/Resolution';
import KidsPool from './ProjectCards/KidsPool';
import LuckyPeak from './ProjectCards/LuckyPeak';
// import Card2 from './ProjectCards/Card2';
// import Card3 from './ProjectCards/Card3';
import './SubPage.scss';

const mount = () => {
  let tempText = document.getElementById('tempText');
  if (tempText != null) {
    tempText.outerHTML = "";
  }

  let cursor = document.getElementById("cursor");
  cursor.style.setProperty("display", "none");

  let cards = document.getElementsByClassName("project-bg");
  for (let card in cards) {
    setTimeout(() => {
      if (cards[card] != null && cards[card].classList != null) {
        cards[card].classList.remove("transitioned");
      }
    }, card * 300);
  }

  const unmount = () => {
    console.log('unmounted')
    // ...
  }
  return unmount
}

export default function SubPage(props) {
  const [state, setState] = useState({
    cards: [
      { key: 'art-escape', hovered: false, timeout: null, positionLoop: null, content: <ArtEscape /> },
      { key: 'resolution', hovered: false, timeout: null, positionLoop: null, content: <Resolution /> },
      { key: 'kidspool', hovered: false, timeout: null, positionLoop: null, content: <KidsPool /> },
      { key: 'lucky-peak', hovered: false, timeout: null, positionLoop: null, content: <LuckyPeak /> },
      { key: 'card5', hovered: false, timeout: null, positionLoop: null, content: <ArtEscape /> },
      { key: 'card6', hovered: false, timeout: null, positionLoop: null, content: <ArtEscape /> },
      { key: 'card7', hovered: false, timeout: null, positionLoop: null, content: <ArtEscape /> },
    ]
  });

  const mouse = useRef(
    {
      x: 0,
      y: 0
    });

  const mouseAbsolute = useRef({
    x: 0,
    y: 0
  });

  const [cursor, setCursor] = useState(null);

  const projectHoverCallback = (card, hovered) => {
    let cardIndex = state.cards.findIndex(function (c) {
      return c.key === card.key;
    });

    let oldCards = state.cards;
    let oldCard = state.cards[cardIndex];

    let tempCursor;

    if (cursor != null) {
      tempCursor = cursor;
    } else {
      tempCursor = document.getElementById("cursor")
      tempCursor.style.setProperty("display", "");
      setCursor(tempCursor);
    }

    if (!hovered) {
      oldCard.hovered = hovered;
      if (oldCard.timeout != null) {
        clearTimeout(oldCard.timeout);
        oldCard.timeout = null;
      }
      if (oldCard.positionLoop != null) {
        clearInterval(oldCard.positionLoop);
        oldCard.positionLoop = null;
      }

      oldCards[cardIndex] = oldCard;
      setState({
        cards: oldCards
      });

      let cardElement = document.getElementById(card.key).childNodes[0];
      cardElement.style.setProperty("left", "0px");
      cardElement.style.setProperty("top", "0px");
      tempCursor.remove();
    } else {
      tempCursor.remove();
      document.getElementById('subpage').appendChild(tempCursor);
      setInterval((tempCursor) => {
        if (tempCursor != null) {
          tempCursor.style.setProperty("left", mouseAbsolute.current.x);
          tempCursor.style.setProperty("top", mouseAbsolute.current.y);
        }
      }, 1, tempCursor);

      oldCard.timeout = setTimeout(() => {
        oldCard.hovered = hovered;
        oldCards[cardIndex] = oldCard;
        setState({
          cards: oldCards
        });

        let cardElement = document.getElementById(card.key).childNodes[0];
        let rect = cardElement.getBoundingClientRect();
        let rectMidX = rect.left + rect.width / 2;
        let rectMidY = rect.top + rect.height / 2;

        oldCard.positionLoop = setInterval((rectMidX, rectMidY) => {
          let diffX = rectMidX - mouse.current.x;
          let diffY = rectMidY - mouse.current.y;

          // TODO: Tweak this
          diffX = diffX / 7;
          diffY = diffY / 7;

          cardElement.style.setProperty("left", (-1 * diffX) + "px");
          cardElement.style.setProperty("top", (-1 * diffY) + "px");
        }, 50, rectMidX, rectMidY);
      }, 700)
    }
  }

  const onMouseMove = (e) => {
    mouse.current = {
      x: e.clientX,
      y: e.clientY
    };
    mouseAbsolute.current = {
      x: e.pageX,
      y: e.pageY
    };
  }

  useEffect(mount, []);

  return (
    <div id="subpage" className="subpage" onMouseMove={onMouseMove}>
      <svg id="cursor" className="cursor-counter">
        <circle r="18" cx="20" cy="20"></circle>
      </svg>
      <div className="subpage-header">
        {props.page}
      </div>
      <div className="projects-container-wrapper">
        <div className="projects-container">
          {state.cards.map((card) => (
            (
              <div key={card.key} id={card.key} className="project-bg transitioned">
                <Card card={card} callback={projectHoverCallback} />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
