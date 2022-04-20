import React from "react";
import "./testimonial-card.css";

function TestimonialCard({
  icon,
  userImg,
  review,
  userName,
  jobTitle,
  className,
}) {
  return (
    <>
      <div className={`testimonial-card-wrapper ${className}`}>
        <div className="card-header">
          <img src={icon} alt="" />
        </div>
        <div className="card-body">
          <p>{review}</p>
          <div className="user-details">
            <img src={userImg} alt="userImg" />
            <div className="user-data">
              <h6>{userName}</h6>
              <span>{jobTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
