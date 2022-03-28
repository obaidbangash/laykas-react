import React from "react";
import { Grid, View, Button } from "@aws-amplify/ui-react";
import financialImage from "../../assets/financial-img.png";
import "./financial-goal.css";

function FinancialGoal() {
  return (
    <div className="financial-goal">
      <div className="container">
        <div className="financial-goal-wrapper">
          <Grid
            templateColumns="1fr 1fr"
            templateRows="10rem 10rem"
            gap="var(--amplify-space-small)"
            alignItems="center"
          >
            <div className="financial-img">
              <img src={financialImage} alt="financialImage" />
            </div>
            <View>
              <div className="financial-content">
                <h3 className="h3">
                  Take charge of your <span>financial goals.</span>
                </h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisi ut scelerisque purus massa adipiscing facilisis risus
                  dolor scelerisque. Nec pulvinar faucibus pharetra diam
                  venenatis. At quis diam.
                </p>
                <Button className="main-btn" variation="link">
                  Learn more <span>&#8594;</span>
                </Button>
              </div>
            </View>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default FinancialGoal;
