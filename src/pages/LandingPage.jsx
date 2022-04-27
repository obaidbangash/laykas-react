import React from "react";
import Banner from "../components/hero/Banner";
import FinancialGoal from "../components/financial-goal/FinancialGoal";
import FlexableOption from "../components/flexable-option/FlexableOption";
import Platform from "../components/platform/Platform";
import Membership from "../components/membership/Membership";
import Testimonial from "../components/testimonial/Testimonial";
import CopyToClipBoard from "../components/clipboard/copyToClipBoard";
import Video from "../components/clipboard/Video";

function LandingPage() {
  return (
    <>
      <CopyToClipBoard>
        <Banner />
        <FinancialGoal />
        <FlexableOption />
        <Platform />
        <Membership />
        <Testimonial />
        <Video
          mp4Src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"
          webmSrc="https://giant.gfycat.com/VerifiableTerrificHind.webm"
        />
      </CopyToClipBoard>
    </>
  );
}

export default LandingPage;
