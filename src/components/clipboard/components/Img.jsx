import React, { useRef } from "react";

function Img(props) {
  const ImgTag = useRef();
  const copyLinkToClipboard = (e) => {
    const rect = e.target.getBoundingClientRect();
    const url = ImgTag.current.getAttribute("src");
    props.onCopyAsset(rect, url);
  };
  return (
    <img
      ref={ImgTag}
      src={props.src}
      alt={props.alt}
      onMouseEnter={copyLinkToClipboard}
    />
  );
}

export default Img;
