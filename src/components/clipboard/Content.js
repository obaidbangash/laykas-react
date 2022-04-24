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

  const onCopyVideo = (rect, url) => {
    const { setBtnsGroupPosition, showButtonsGroup, setSelectedText } = props;


    setBtnsGroupPosition(rect);
    showButtonsGroup();
    setSelectedText(url)
  }

  const childrenWithProps = props.children.map((child, index) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onCopyVideo });
    }
    return child;
  });

  return (
    <div>
      <section
        onMouseUp={bubbleUpSelectedRegion}
        onMouseMove={bubbleUpSelectedRegion}
        onKeyUp={bubbleUpEditableSelectedRegion}
        onCopyVideo={onCopyVideo}
      >
        {childrenWithProps}
      </section>
    </div>
  );
}

export default Content;
