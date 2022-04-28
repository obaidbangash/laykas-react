import React from "react";
import "./Employment.css";

function EmploymentStatus(props) {
  return (
    <div className="status-wrapper">
      <h6>{props.status}</h6>
      <span>{props.details}</span>
    </div>
  );
}

export default EmploymentStatus;
