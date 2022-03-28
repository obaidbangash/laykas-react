import React from "react";
import Banner from "../components/hero/Banner";
import FinancialGoal from "../components/financial-goal/FinancialGoal";
import FlexableOption from "../components/flexable-option/FlexableOption";
import Platform from "../components/platform/Platform";
import Membership from "../components/membership/Membership";
import Testimonial from "../components/testimonial/Testimonial";
function LandingPage1() {
  return (
    <>
      <Banner />
      <FinancialGoal />
      <FlexableOption />
      <Platform />
      <Membership />
      <Testimonial />
    </>
  );
}

export default LandingPage1;
