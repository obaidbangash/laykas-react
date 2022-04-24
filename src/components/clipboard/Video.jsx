import React, { useRef } from "react";
function Video(props) {
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
    props?.onCopyAsset(rect, url);
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
            <source src={props.mp4Src} type="video/mp4" />
            <source src={props.webmSrc} type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
