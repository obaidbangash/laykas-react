import React, { useRef } from "react";
function Video(props) {
  console.log("props", props);
  const videoTag = useRef();

  function hoverVideo() {
    videoTag.current.play();
  }

  function hideVideo(e) {
    videoTag.current.pause();
  }
  const copyLinkToClipboard = (e) => {
    const rect = e.target.getBoundingClientRect();
    const url = videoTag.current.children[0].getAttribute("src");
    props.onCopyVideo(rect, url);
  };
  return (
    <div className="container">
      <div id="videosList">
        <div className="video" onMouseEnter={copyLinkToClipboard}>
          <video
            ref={videoTag}
            className="thevideo"
            loop
            preload="none"
            onMouseEnter={hoverVideo}
            onMouseLeave={hideVideo}
          >
            <source
              src="https://giant.gfycat.com/VerifiableTerrificHind.mp4"
              type="video/mp4"
            />
            <source
              src="https://giant.gfycat.com/VerifiableTerrificHind.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
