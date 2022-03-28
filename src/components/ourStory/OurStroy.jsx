import { Grid, View } from "@aws-amplify/ui-react";
import React from "react";
import "./ourstory.css";
import storyImg from "../../assets/our-stroy.png";
function OurStroy() {
  return (
    <div className="our-story">
      <div className="container">
        <Grid gap="24px" templateColumns="1fr 1fr" alignItems="center">
          <View className="our-story-content">
            <h3 className="h3">Our story</h3>
            <p className="p">
              Our focus is always on finding the best people to work with. Our
              bar is high, but you look ready to take on the challenge. We
              design and implement creative solutions to everyday business
              problems. <br />
              <br /> We are a team of creative consultants who help bridge the
              digital gap between companies and their clients with websites that
              not only serve as marketing platforms but also provide solutions
              to online business problems and digital marketing strategies that
              connect you with the ideal client and help create a loyal
              customer.
            </p>
          </View>
          <View className="our-story-img">
            <img src={storyImg} alt="storyImg" />
          </View>
        </Grid>

        <Grid
          className="who-we-wrapper"
          gap="24px"
          templateColumns="1fr 1fr"
          alignItems="center"
        >
          <View className="who-we-are">
            <h3 className="h3">Who are we?</h3>
            <p className="p">
              Our sign up is simple. We only require your basic company
              information and what type of data storage you want. Our sign up is
              dead simple. We only require your basic company information and
              what type of data storage you want.
            </p>
          </View>
          <View className="who-we-are">
            <h3 className="h3">Our process</h3>
            <p className="p">
              We support bulk uploading via SQL, integrations with most data
              storage products, or you can use our API. Simply select where
              you'd like to transfer your data and we'll being the process of
              migrating it instantly.
            </p>
          </View>
        </Grid>
      </div>
    </div>
  );
}

export default OurStroy;
