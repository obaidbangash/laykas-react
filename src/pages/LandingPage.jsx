import React from "react";
import Banner from "../components/hero/Banner";
import FinancialGoal from "../components/financial-goal/FinancialGoal";
import FlexableOption from "../components/flexable-option/FlexableOption";
import Platform from "../components/platform/Platform";
import Membership from "../components/membership/Membership";
import Testimonial from "../components/testimonial/Testimonial";
import CopyToClipBoard from "../components/clipboard/copyToClipBoard";
import Video from "./Video";
function LandingPage1() {
  return (
    <>
      <CopyToClipBoard>
        <Banner />
        <FinancialGoal />
        <FlexableOption />
        <Platform />
        <Membership />
        <Testimonial />
        <Video />
      </CopyToClipBoard>
    </>
  );
}

export default LandingPage1;