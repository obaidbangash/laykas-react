import React from "react";
import "./ourteam.css";
import OurTeamCard from "../ourTeamCard/OurTeamCard";
import { Grid, View } from "@aws-amplify/ui-react";

import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import team5 from "../../assets/team5.png";
import team6 from "../../assets/team6.png";

function OurTeam() {
  return (
    <div className="our-team">
      <div className="container">
        <span>OUR TEAM</span>
        <h3 className="h3">Small team. Big hearts.</h3>
        <p>
          Our focus is always on finding the best people to work with. Our bar
          is high, but you look ready to take on the challenge.
        </p>

        <Grid
          gap="24px"
          templateColumns={{
            base: "1fr",
            medium: "1fr 1fr 1fr",
          }}
          alignItems="center"
          className="team-cards-wrapper"
        >
          <View>
            <OurTeamCard
              userImg={team1}
              userName="David O’Mara"
              jobTitle="Cheez Whiz Addict"
            />
          </View>
          <View>
            <OurTeamCard
              userImg={team2}
              userName="Jhon Anderson"
              jobTitle="Senior Frontend Developer"
            />
          </View>
          <View>
            <OurTeamCard
              userImg={team3}
              userName="Clara Bertoletti"
              jobTitle="SEO at Comoti"
            />
          </View>
          <View>
            <OurTeamCard
              userImg={team4}
              userName="Clara Bertoletti"
              jobTitle="Material-UI lover"
            />
          </View>
          <View>
            <OurTeamCard
              userImg={team5}
              userName="Jhon Anderson"
              jobTitle="Senior Frontend Developers"
            />
          </View>
          <View>
            <OurTeamCard
              userImg={team6}
              userName="Chary Smith"
              jobTitle="SEO at Comoti"
            />
          </View>
        </Grid>
      </div>
    </div>
  );
}

export default OurTeam;
