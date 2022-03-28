import React from "react";
import "./membership.css";
import { Grid, View } from "@aws-amplify/ui-react";
import membershipImg from "../../assets/membership.png";
import bg from "../../assets/flexableBg.png";
function Membership() {
  return (
    <div className="membership bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <Grid
          templateColumns="1fr 1fr"
          gap="var(--amplify-space-small)"
          alignItems="center"
        >
          <View className="membership-content">
            <h3 className="h3">Membership has it’s privileges</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              sociis natoque est pharetra ultrices nec sit odio velit. Posuere
              non lorem tellus bibendum viverra ultrices gravida ornare. Mattis
              nec pulvinar hendrerit sit. Turpis id sed ut.
            </p>
            <Grid
              templateColumns="1fr 1fr 1fr"
              gap="var(--amplify-space-small)"
              alignItems="flex-start"
            >
              <View className="membership-package">
                <span>300+</span>
                <p>
                  300 + companies have used LYKAS as part of their benefits
                  package. Happy employees, successful business
                </p>
              </View>
              <View className="membership-package">
                <span>9,000+</span>
                <p>
                  Over 1,500 articles in our Knowledge Center, helping you to
                  stay financially independent.
                </p>
              </View>
              <View className="membership-package">
                <span>99+</span>
                <p>99% of our members reach or exceed their retirement goals</p>
              </View>
            </Grid>
          </View>
          <View className="membership-img">
            <img src={membershipImg} alt="membershipImg" />
          </View>
        </Grid>
      </div>
    </div>
  );
}

export default Membership;
