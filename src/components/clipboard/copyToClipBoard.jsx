/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Content from "./Content";
import CommentBox from "./CommentBox";
import HighlightButtonsGroup from "./HighlightButtonsGroup";
import CommentsList from "./ToDoList";
import { saveSelection, restoreSelection } from "../../util/selection-utils";
function CopyToClip(props) {
  const default_position = {
    position: "absolute",
    left: "0",
    top: "0",
    heightInPixel: 28,
    widthInPixel: 70,
  };
  const [highlightBtnsGroupLayout, setHighlightBtnsGroupLayout] =
    useState(default_position);

  const [comments, setComments] = useState([]);
  const [selectedRange, setSelectedRange] = useState(null);
  const [hiddenCommentBox, setHiddenCommentBox] = useState(true);
  const [hiddenButtonGroup, setHiddenButtonGroup] = useState(true);
  const [selectedText, setSelectedText] = useState("");

  const sethighlightBtnsGroupPosition = ({ left, top, width, height }) => {
    const { heightInPixel, widthInPixel } = highlightBtnsGroupLayout;
    const computedLeft = left + width / 2 - widthInPixel / 2;
    const computedTop = window.scrollY + top - heightInPixel;

    const temp = Object.assign(highlightBtnsGroupLayout, {
      left: computedLeft,
      top: computedTop,
    });
    try {
      setHighlightBtnsGroupLayout(temp);
    } catch (error) {
      console.error("error", error);
    }
  };

  const showButtonsGroup = () => {
    setHiddenButtonGroup(false);
  };

  const saveAndRestoreSelection = () => {
    const savedSelection = saveSelection();
    setSelectedRange(savedSelection);
    toggleCommentBox();
    restoreSelection(savedSelection);
  };

  const toggleCommentBox = () => {
    setHiddenCommentBox(!hiddenCommentBox);
  };

  const toggleButtonsGroup = () => {
    setHiddenButtonGroup(!hiddenButtonGroup);
  };

  const updateCommentList = (newComment) => {
    setComments([newComment, ...comments]);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setHiddenCommentBox(true);
      }
    };
    window.addEventListener("keydown", handleEsc);
  });
  return (
    <div>
      <Content
        setBtnsGroupPosition={sethighlightBtnsGroupPosition}
        showButtonsGroup={showButtonsGroup}
        setSelectedText={setSelectedText}
      >
        {props.children}
      </Content>
      <HighlightButtonsGroup
        layout={highlightBtnsGroupLayout}
        hidden={hiddenButtonGroup}
        saveAndRestoreSelection={saveAndRestoreSelection}
      />
      <CommentBox
        hidden={hiddenCommentBox}
        selectedRange={selectedRange}
        updateCommentList={updateCommentList}
        toggleCommentBox={toggleCommentBox}
        toggleButtonsGroup={toggleButtonsGroup}
        selectedText={selectedText}
        comments={comments}
      />
      <CommentsList comments={comments} setComments={setComments} />
    </div>
  );
}

export default CopyToClip;
