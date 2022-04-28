import React from "react";
import { Grid, View } from "@aws-amplify/ui-react";
import "./summary.css";
import EmploymentStatus from "../employmentStatus/EmploymentStatus";
import bgImg from "../../assets/summary-bg.png";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useInView } from "react-intersection-observer";

function Summary() {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0,
  });
  const classAnimPlay = inView && "anim-play";

  return (
    <div
      className="summary-wrapper"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="summary-container" ref={refAnimation}>
        <h2 className={`anim-fade-in-left ${classAnimPlay}`}>SUMMARY</h2>
        <div className="summary-content">
          <Grid
            gap="35px"
            // templateColumns="1fr 3fr"
            alignItems="center"
            templateColumns={{ base: "1fr", medium: "1fr 3fr" }}
          >
            <View
              className={`anim-fade-in-up employee-statement ${classAnimPlay}`}
            >
              <div className="user-info status-shadow">
                <h4>William Johnson</h4>
                <span>
                  39, Married <br /> Dallax, TX
                </span>
                <div className="user-icon">
                  <AccountCircleIcon />
                </div>
              </div>
              <div className="employee-status status-shadow">
                <Grid
                  gap="41px 0px "
                  templateColumns="repeat(1, 1fr)"
                  alignItems="center"
                  // ref={refAnimation}
                >
                  <EmploymentStatus
                    status="Employment status"
                    details="Independent contractor"
                  />
                  <EmploymentStatus
                    status="Goals"
                    details="Save for retirement Charitable giving"
                  />
                  <EmploymentStatus
                    status="Investment Objective"
                    details="Growth and income"
                  />
                  <EmploymentStatus
                    status="Current Annual Income"
                    details="$100,000"
                  />
                </Grid>
              </div>
            </View>
            <View
              className={`anim-fade-in-up take-away status-shadow ${classAnimPlay}`}
            >
              <h3>Top takeaways:</h3>
              <ol>
                {[1, 2, 3].map((item, index) => (
                  <li key={index}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Temporibus fuga ullam ut quaerat minima error vitae a rem
                    earum facere provident inventore aperiam unde delectus iusto
                    possimus, explicabo excepturi numquam quidem alias id?
                    Repudiandae unde non neque, rem tenetur corporis.
                  </li>
                ))}
              </ol>
            </View>
          </Grid>
          <div className="financial-btn main-btn">
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              endIcon={<ArrowForwardIosIcon />}
            >
              View Financial Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
