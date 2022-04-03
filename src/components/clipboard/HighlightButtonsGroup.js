import React from "react";
import "./HighlightButtonsGroup.css";
import clipboardImg from '../../assets/location.png'

const HighlightButtonsGroup = ({ saveAndRestoreSelection, hidden, layout }) => (
  <div
    hidden={hidden}
    style={{
      position: layout.position,
      left: layout.left,
      top: layout.top,
      width: `${layout.widthInPixel}px`,
      height: `${layout.heightInPixel}px`,
    }}
  >
    <div className="buttons-group">
      <button
        onClick={saveAndRestoreSelection}
        className="buttons-group__comment-btn"
      >
        <img src={clipboardImg} alt="clipboardImg" /> Add Notes
      </button>
      <div className="buttons-group__down-arrow-tip"></div>
    </div>
  </div>
);

export default HighlightButtonsGroup;
