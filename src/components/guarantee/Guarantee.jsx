import React from "react";
import { Grid, View, Button } from "@aws-amplify/ui-react";
import "./guarantee.css";
import listImg from "../../assets/tick.png";

function Guarantee() {
  return (
    <div className="guarantee-wrapper">
      <div className="container">
        <div className="guarantee-card">
          <Grid templateColumns="1fr 1fr" gap="0">
            <View className="guarantee-item">
              <h4 className="p">Our guarantee</h4>
              <p>From open source to premium services.</p>
              <ul>
                <li>
                  <img src={listImg} alt="" />
                  <span>We will not sell your information</span>
                </li>
                <li>
                  <img src={listImg} alt="" />
                  <span>All questions answered within 24h</span>
                </li>
                <li>
                  <img src={listImg} alt="" />
                  <span>Your data will never be shared</span>
                </li>
                <li>
                  <img src={listImg} alt="" />
                  <span>Highly curated experience</span>
                </li>
                <li>
                  <img src={listImg} alt="" />
                  <span>No third-party solicitations.</span>
                </li>
                <li>
                  <img src={listImg} alt="" />
                  <span>Unlimited support</span>
                </li>
              </ul>
            </View>
            <View className="guarantee-expend">
              <h4 className="p">A better way to Expand. Globally.</h4>
              <p>
                We make it simple to hire, onboard, and pay your global
                workforce in 150+ countries in full compliance with local laws.
              </p>
              <Button
                className="main-btn"
                style={{ backgroundColor: "#125CE4" }}
              >
                Learn more
              </Button>
            </View>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
