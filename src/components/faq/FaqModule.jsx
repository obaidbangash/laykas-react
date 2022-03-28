import React from "react";
import "./faq.css";
import Faq from "./Faq";
function FaqModule() {
  return (
    <div className="faq-main">
      <div className="faq-container">
        <span>FAQ</span>
        <h1>Have a question?</h1>
        <p className="p">
          Search our FAQ for answers to anything you might ask.
        </p>
        <div className="faq-section-wrapper">
          <h3 className="h3">Who are we?</h3>
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return <Faq key={index} index={index} />;
          })}
        </div>
        <div className="faq-section-wrapper">
          <h3 className="h3">Account & settings</h3>
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return <Faq key={index} index={index} />;
          })}
        </div>
        <div className="faq-section-wrapper">
          <h3 className="h3">Security</h3>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return <Faq key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FaqModule;
