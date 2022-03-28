import React from "react";
import { Grid, View, Button } from "@aws-amplify/ui-react";
import flexableImg from "../../assets/flexable-img.png";
import flexableBg from "../../assets/flexableBg.png";

import "./flexable-option.css";

function FlexableOption() {
  return (
    <div
      className="flexable-option"
      style={{ backgroundImage: `url(${flexableBg})` }}
    >
      <div className="container">
        <Grid
          templateColumns="1fr 1fr"
          templateRows="10rem 10rem"
          gap="var(--amplify-space-small)"
          alignItems="center"
          display="flex"
        >
          <View className="flexable-content">
            <span>FLEXIBLE OPTIONS</span>
            <h3 className="h3">
              Rest easy about your <span>future.</span>
            </h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              massa quam ac massa duis tempor in vel. Tellus vitae in nulla
              bibendum malesuada id. At convallis adipiscing eget eget ac nulla
              congue consectetur tellus. Sagittis ac vitae tincidunt id.
            </p>
          </View>
          <View className="flexable-img">
            <img src={flexableImg} alt="flexableImg" />
          </View>
        </Grid>
      </div>
    </div>
  );
}

export default FlexableOption;
