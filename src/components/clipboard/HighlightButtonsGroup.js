import React from "react";
import "./HighlightButtonsGroup.css";
import CreateIcon from '@material-ui/icons/Create';
import EditLocationIcon from '@material-ui/icons/EditLocation';

const HighlightButtonsGroup = ({ saveAndRestoreSelection, hidden, layout }) => (
  <>
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
          <CreateIcon />  Add Notes
        </button>
        <div className="buttons-group__down-arrow-tip"></div>
      </div>
    </div>
    <div className="add-notes-icon" onClick={saveAndRestoreSelection}>
      <EditLocationIcon />
    </div>
  </>
);

export default HighlightButtonsGroup;
