import React from "react";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import OurStroy from "../components/ourStory/OurStroy";
import OurTeam from "../components/ourTeam/OurTeam";
import Company from "../components/companies/Company";
import ContactUs from "../components/contactUs/ContactUs";
function AboutUs() {
  return (
    <>
      <AboutBanner />
      <OurStroy />
      <OurTeam />
      <Company />
      <ContactUs />
    </>
  );
}

export default AboutUs;
