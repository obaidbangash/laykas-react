import React from "react";
import { Grid, View, Button } from "@aws-amplify/ui-react";
import financialImage from "../../assets/financial-img.png";
import "./financial-goal.css";
import { useInView } from "react-intersection-observer";
import Img from "../clipboard/components/Img";

function FinancialGoal(props) {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0.45,
  });
  const classAnimPlay = inView && "anim-play";

  return (
    <div className="financial-goal">
      <div className="container">
        <div className="financial-goal-wrapper">
          <Grid
            templateColumns="1fr 1fr"
            templateRows="10rem 10rem"
            gap="var(--amplify-space-small)"
            alignItems="center"
            ref={refAnimation}
          >
            <div className={`anim-fade-in-up financial-img ${classAnimPlay}`}>
              <Img
                src={financialImage}
                onCopyAsset={props.onCopyAsset}
                alt="financialImage"
              />
              {/* <img src={financialImage} alt="financialImage" /> */}
            </div>
            <View className={`anim-fade-in-up ${classAnimPlay}`}>
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
