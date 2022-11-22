import React from "react";

import "./SingleCard.css";

const SingleCard = ({ card, onHandleChoice }) => {
  const handleClick = () => {
    onHandleChoice(card);
  };

  return (
    <div className="card">
      <div className="">
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
