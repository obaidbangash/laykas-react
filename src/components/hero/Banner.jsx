import React, { useEffect, useRef, useCallback, useState } from "react";
import { Grid, View, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./banner.css";
import image from "../../assets/acf-img.png";
import bannerBg from "../../assets/banner-bg.png";
import { useInView } from "react-intersection-observer";
import Img from "../clipboard/components/Img";

function Banner(props) {
  const { ref: refAnimation, inView } = useInView({
    threshold: 0.45,
  });
  const classAnimPlay = inView && "anim-play";
  const texts = ["Retirement", "Dreamhome", "College Plan", " Whatever"]; // changing text

  const Texts = (props) => {
    const [state, setState] = useState({
      left: "",
      right: "",
      texts: props.texts,
      current: props.texts[0],
    });
    const stay = useRef(false);
    const staybt = useRef(false);
    const update = useCallback(() => {
      const addNextChar = () => {
        setState({
          ...state,
          left: state.left + state.texts[0].slice(0, 1),
          right: state.texts[0].slice(1),
          texts: state.texts.map((e, i) => (i === 0 ? e.slice(1) : e)),
        });
      };
      const deleteLastChar = () => {
        if (state.left.slice(0, -1) === "") {
          stay.current = true;
          staybt.current = true;
        }
        setState({
          ...state,
          left: state.left.slice(0, -1),
          right: state.left.slice(-1) + state.right,
        });
      };
      const switchToNextText = () => {
        stay.current = false;
        staybt.current = false;
        const nextText = state.texts[1];
        setState({
          ...state,
          left: nextText.slice(0, 1), // first char of next text
          right: nextText.slice(1), // rest of the next char
          texts: [
            ...state.texts.slice(1).map((e, i) => (i === 0 ? e.slice(1) : e)),
            state.current,
          ],
          current: nextText,
        });
      };
      if (state.texts[0].length === 0) {
        stay.current = false;
        if (state.left === "") switchToNextText();
        else deleteLastChar();
      } else addNextChar();
    }, [stay, staybt, setState, state]);
    useEffect(() => {
      setTimeout(
        () => {
          if (state.texts[0].length === 1) stay.current = true;
          window.requestAnimationFrame(update);
        },
        stay.current
          ? staybt.current
            ? props.waitbt || 30
            : props.wait || 3000
          : props.speed || 30
      );
    }, [update]);
    return (
      <span className={props.className}>
        {state.left}
        <span>{state.right}</span>
      </span>
    );
  };
  return (
    <div
      className="acf-wrapper"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="acf-container">
        <div className="acf-content">
          <Grid
            gap="24px"
            templateColumns={{
              base: "1fr",
              medium: "1fr 1fr",
            }}
            alignItems="center"
            ref={refAnimation}
          >
            <View
              data-aos-anchor-easing="ease-in-out"
              className={`anim-fade-in-up ${classAnimPlay}`}
            >
              <div className="acf-text">
                <h1>
                  Financial freedom for your{" "}
                  <Texts
                    className={"texts"}
                    waitbt={100}
                    wait={2000}
                    speed={27}
                    texts={texts}
                  />
                  <span>.</span>|
                </h1>
                <p>Expert financial planning tools for the masses.</p>
                <div className="btn-wrapper">
                  <Button
                    className="main-btn"
                    style={{ backgroundColor: "#125CE4" }}
                  >
                    Learn more
                  </Button>
                  <Button className="main-btn">Get started</Button>
                </div>
              </div>
            </View>
            <View className={`anim-fade-in-up ${classAnimPlay}`}>
              <div className="acf-img-wrapper">
                <Img
                  src={image}
                  alt="banner-img"
                  // need to pass this as a props
                  onCopyAsset={props.onCopyAsset}
                />
              </div>
            </View>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Banner;
