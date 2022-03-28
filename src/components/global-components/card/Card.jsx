import React from "react";
import { Button } from "@aws-amplify/ui-react";
import "./card.css";

function Card({ btnText, description, cardIcon, title, backgroundColor }) {
  return (
    <div className="card-wrapper">
      <div
        className="card-header"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <img src={cardIcon} alt="cardIcon" />
      </div>
      <div className="card-body">
        <b className="p">{title}</b>
        <p>{description}</p>
        <div>
          <Button className="main-btn" variation="link">
            {btnText} <span>&#8594;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
