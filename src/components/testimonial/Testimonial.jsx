import React from "react";
import TestimonialCard from "../global-components/testimonialCard/TestimonialCard";
import icon from "../../assets/comment.png";
import userImg from "../../assets/user.png";
import { Button, Grid, View } from "@aws-amplify/ui-react";
import "./testimonial.css";
import Guarantee from "../guarantee/Guarantee";

function Testimonial() {
  return (
    <>
      <div className="testimonial-wrapper">
        <div className="container">
          <h2 className="main-title">What our clients say</h2>
          <p className="p">
            Companies and individuals for all industries love LYKAS. Here are
            just a few examples.
          </p>
          <Button className="main-btn" style={{ backgroundColor: "#125CE4" }}>
            View all <span>&#8594;</span>
          </Button>
          <Grid templateColumns="1fr 1fr 1fr" gap="22px" alignItems="center">
            <View>
              <TestimonialCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userName="Clara Bertoletti"
                jobTitle="Material-UI lover"
                icon={icon}
                userImg={userImg}
              />
            </View>
            <View>
              <TestimonialCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userName="Clara Bertoletti"
                jobTitle="Material-UI lover"
                icon={icon}
                userImg={userImg}
              />
            </View>
            <View>
              <TestimonialCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userName="Clara Bertoletti"
                jobTitle="Material-UI lover"
                icon={icon}
                userImg={userImg}
              />
            </View>
          </Grid>
        </div>
      </div>
      <Guarantee />
    </>
  );
}

export default Testimonial;
