import React from "react";
import TestimonialCard from "../global-components/testimonialCard/TestimonialCard";
import icon from "../../assets/comment.png";
import userImg from "../../assets/user.png";
import { Button, Grid, View } from "@aws-amplify/ui-react";
import "./testimonial.css";
import Guarantee from "../guarantee/Guarantee";
import { useInView } from "react-intersection-observer";

function Testimonial() {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0.45,
  });
  const classAnimPlay = inView && "anim-play";
  return (
    <>
      <div className="testimonial-wrapper" ref={refAnimation}>
        <div className={`anim-fade-in-up container ${classAnimPlay}`}>
          <h2 className="main-title">What our clients say</h2>
          <p className="p">
            Companies and individuals for all industries love LYKAS. Here are
            just a few examples.
          </p>
          <Button className="main-btn" style={{ backgroundColor: "#125CE4" }}>
            View all <span>&#8594;</span>
          </Button>
          <Grid
            templateColumns={{
              base: "1fr",
              medium: "1fr 1fr 1fr",
            }}
            gap="22px"
            alignItems="center"
          >
            <View>
              <TestimonialCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userName="Clara Bertoletti"
                jobTitle="Material-UI lover"
                icon={icon}
                userImg={userImg}
                className={`anim-fade-in-up anim-delay-1 ${classAnimPlay}`}
              />
            </View>
            <View>
              <TestimonialCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userName="Clara Bertoletti"
                jobTitle="Material-UI lover"
                icon={icon}
                userImg={userImg}
                className={`anim-fade-in-up anim-delay-3 ${classAnimPlay}`}
              />
            </View>
            <View>
              <TestimonialCard
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                userName="Clara Bertoletti"
                jobTitle="Material-UI lover"
                icon={icon}
                userImg={userImg}
                className={`anim-fade-in-up anim-delay-5 ${classAnimPlay}`}
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
