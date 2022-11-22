import React from "react";

import "./SingleCard.css";

const SingleCard = ({ card, flipped, disabled, onHandleChoice }) => {
  const handleClick = () => {
    !disabled && onHandleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card-back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
