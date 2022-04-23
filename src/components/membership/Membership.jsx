import React from "react";
import "./membership.css";
import { Grid, View } from "@aws-amplify/ui-react";
import membershipImg from "../../assets/membership.png";
import bg from "../../assets/flexableBg.png";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";

function Membership() {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0.45,
  });
  const classAnimPlay = inView && "anim-play";
  return (
    <InView threshold={0.25} triggerOnce={false}>
      {({ ref, inView }) => (
        <div
          className="membership bg"
          style={{ backgroundImage: `url(${bg})` }}
          ref={refAnimation}
        >
          <div className="container">
            <Grid
              templateColumns="1fr 1fr"
              gap="var(--amplify-space-small)"
              alignItems="center"
            >
              <View
                className={`membership-content anim-fade-in-left anim-delay-3 ${classAnimPlay}`}
              >
                <h3 className="h3">Membership has it’s privileges</h3>
                <p className="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices sociis natoque est pharetra ultrices nec sit odio
                  velit. Posuere non lorem tellus bibendum viverra ultrices
                  gravida ornare. Mattis nec pulvinar hendrerit sit. Turpis id
                  sed ut.
                </p>
                <Grid
                  templateColumns="1fr 1fr 1fr"
                  gap="var(--amplify-space-small)"
                  alignItems="flex-start"
                >
                  <View className="membership-package">
                    <CountUp
                      end="300"
                      duration={2}
                      separator=","
                      useEasing={true}
                    >
                      {({ countUpRef, start }) => (
                        <InView
                          as="div"
                          className="count-content"
                          onChange={start}
                          triggerOnce={false}
                        >
                          <span ref={countUpRef}>300</span> <span>+</span>
                          <p>
                            300 + companies have used LYKAS as part of their
                            benefits package. Happy employees, successful
                            business
                          </p>
                        </InView>
                      )}
                    </CountUp>
                  </View>
                  <View className="membership-package">
                    <CountUp
                      end="9000"
                      duration={2}
                      separator=","
                      useEasing={true}
                    >
                      {({ countUpRef, start }) => (
                        <InView
                          as="div"
                          className="count-content"
                          onChange={start}
                          triggerOnce={false}
                        >
                          <span ref={countUpRef}>9,000</span> <span>+</span>
                          <p>
                            Over 1,500 articles in our Knowledge Center, helping
                            you to stay financially independent.
                          </p>
                        </InView>
                      )}
                    </CountUp>
                  </View>

                  <View className="membership-package">
                    <CountUp
                      end="99"
                      duration={2}
                      separator=","
                      useEasing={true}
                    >
                      {({ countUpRef, start }) => (
                        <InView
                          as="div"
                          className="count-content"
                          onChange={start}
                          triggerOnce={false}
                        >
                          <span ref={countUpRef}>99</span> <span>+</span>
                          <p>
                            99% of our members reach or exceed their retirement
                            goals
                          </p>
                        </InView>
                      )}
                    </CountUp>
                  </View>
                </Grid>
              </View>
              <View
                className={`membership-img anim-fade-in-right anim-delay-3 ${classAnimPlay}`}
              >
                <img src={membershipImg} alt="membershipImg" />
              </View>
            </Grid>
          </div>
        </div>
      )}
    </InView>
  );
}

export default Membership;
