import React from "react";
import Card from "../global-components/card/Card";
import cardIcon from "../../assets/Book.png";
import "./Platform.css";
import { Grid } from "@aws-amplify/ui-react";
import { useInView } from "react-intersection-observer";

function Platform() {
  const { ref: refAnimation, inView } = useInView({
    threshold: 1,
  });
  const classAnimPlay = inView && "anim-play";

  return (
    <div className="platform-wrapper">
      <div className="container">
        <div
          className={`anim-fade-in-up platform-header ${classAnimPlay}`}
          ref={refAnimation}
        >
          <h2 className="main-title">OUR PLATFORM</h2>
          <p className="p">
            The best way to learn is by using skills. Browse the available
            course categories, choose your favourite one and start learning.
          </p>
        </div>
        <Grid
          templateColumns="1fr 1fr 1fr 1fr"
          gap="26px"
          // gap="var(--amplify-space-small)"
          alignItems="center"
          ref={refAnimation}
        >
          <Card
            backgroundColor="#2196F3"
            cardIcon={cardIcon}
            title="Get to know you better"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            btnText="Learn more"
            className={`anim-fade-in-up anim-delay-2 ${classAnimPlay}`}
          />
          <Card
            backgroundColor="#9C27B0"
            cardIcon={cardIcon}
            title="Financial Plan"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            btnText="Learn more"
            className={`anim-fade-in-up anim-delay-4 ${classAnimPlay}`}
          />
          <Card
            backgroundColor="#F9B934"
            cardIcon={cardIcon}
            title="Deep Dive"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            btnText="Learn more"
            className={`anim-fade-in-up anim-delay-5 ${classAnimPlay}`}
          />
          <Card
            backgroundColor="#3F51B5"
            cardIcon={cardIcon}
            title="Advisor Center"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            btnText="Learn more"
            className={`anim-fade-in-up anim-delay-6 ${classAnimPlay}`}
          />
        </Grid>
      </div>
    </div>
  );
}

export default Platform;
