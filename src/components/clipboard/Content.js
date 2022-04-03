// vim: syntax=JSX
import React from "react";

function Content(props) {
  const bubbleUpEditableSelectedRegion = (e) => {
    const arrowEvents = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
    if (arrowEvents.includes(e.key) && e.shiftKey) {
      bubbleUpSelectedRegion(e);
    }
  };

  const bubbleUpSelectedRegion = (e) => {
    const { setBtnsGroupPosition, showButtonsGroup, setSelectedText } = props;

    try {
      const selection = window.getSelection();
      if (selection.toString()) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const { startOffset, endOffset, endContainer } = range;


        const text = endContainer?.data?.substring(startOffset, endOffset) || "";

        setBtnsGroupPosition(rect);
        showButtonsGroup();
        setSelectedText(text)
      }
    } catch (error) {
      console.log("==", error);
    }
  };


  const contentSectionStyles = {
    textAlign: "justify",
    background: "#fff",
    padding: "20px",
  };

  return (
    <div>
      <section
        style={contentSectionStyles}
        onMouseUp={bubbleUpSelectedRegion}
        onMouseMove={bubbleUpSelectedRegion}
        onKeyUp={bubbleUpEditableSelectedRegion}
      >
        {props.children}
      </section>
    </div>
  );
}

export default Content;
