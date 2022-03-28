import React from "react";
import { Grid, View } from "@aws-amplify/ui-react";

import "./company.css";
import LogoImage from "../global-components/logoImage/LogoImage";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

function Company() {
  return (
    <div className="company-wrapper">
      <div className="container">
        <div className="company-card">
          <Grid gap="0" templateColumns="1fr 1fr" alignItems="center">
            <View className="companies-content">
              <h3 className="h3">Trusted by you favorite companies</h3>
              <p className="p">
                We are registered as a distributor with AMFI, <br />
                investment advisor with SEBI and platform partners with BSE.
              </p>
            </View>
            <View className="company-logo">
              <Grid
                gap="24px"
                templateColumns="1fr 1fr 1fr 1fr"
                alignItems="center"
              >
                <View>
                  <LogoImage logoUrl="#" logoImage={logo1} />
                </View>
                <View>
                  <LogoImage logoUrl="#" logoImage={logo2} />
                </View>
                <View>
                  <LogoImage logoUrl="#" logoImage={logo3} />
                </View>
                <View>
                  <LogoImage logoUrl="#" logoImage={logo4} />
                </View>
                <View>
                  <LogoImage logoUrl="#" logoImage={logo5} />
                </View>
                <View>
                  <LogoImage logoUrl="#" logoImage={logo6} />
                </View>
              </Grid>
            </View>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Company;
