import React from "react";
import "./ourTeamCard.css";

function OurTeamCard({ userImg, userName, jobTitle }) {
  return (
    <>
      <div className="team-card-wrapper">
        <div className="user-details">
          <img src={userImg} alt="userImg" />
        </div>
        <div className="user-data">
          <h6>{userName}</h6>
          <span>{jobTitle}</span>
        </div>
      </div>
    </>
  );
}

export default OurTeamCard;
