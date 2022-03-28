import { Button } from "@aws-amplify/ui-react";
import React from "react";
import "./guaide-line.css";
import download from "../../assets/download.png";

function GuaideLine() {
  return (
    <div className="guaide-line">
      <div className="container">
        <h3 className="h3">Didn't find what you are looking for?</h3>
        <div className="btn-wrapper">
          <Button className="main-btn" variation="primary">
            <img src={download} alt="download" /> Download the guid
          </Button>
          <Button className="main-btn" variation="outline">
            Ask a question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuaideLine;
