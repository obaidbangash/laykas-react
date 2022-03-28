import React from "react";
import "./contact-us.css";
import { Grid, View } from "@aws-amplify/ui-react";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-us-content">
          <Grid gap="0" templateColumns="1fr 1fr" alignItems="center">
            <View className="contact-details">
              <h3 className="h3">Contact Us</h3>
              <p className="p">
                Rather than worrying about switching offices every couple years,
                you can instead stay in the same location and grow-up from your
                shared coworking space to an office that takes up an entire
                floor.
              </p>
            </View>
            <View className="contact-icons">
              <div className="contact-icon">
                <a href="#">
                  <div className="phone-icon">
                    <img src={phone} alt="mail" />
                  </div>
                  <div>
                    <h6 className="p">Phone</h6>
                    <span className="p">+39 659-657-0133</span>
                  </div>
                </a>
                <a href="#">
                  <div className="phone-icon">
                    <img src={mail} alt="phone" />
                  </div>
                  <div>
                    <h6 className="p">Email</h6>
                    <span className="p">hi@maccarianagency.com</span>
                  </div>
                </a>
              </div>
            </View>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
