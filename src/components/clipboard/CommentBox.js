import { Button } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { InputBase, Typography } from "@material-ui/core";
// import TodoCreate from "./TodoCreate";
import ColorPopover from "./ColorPopover"
import "./CommentBox.css";
import { IconButton, Tooltip } from "@material-ui/core";
import LabelIcon from '@material-ui/icons/Label';

import {
  PaletteOutlined as PaletteIcon
} from "@material-ui/icons";





function CommentBox(props) {
  const { hidden, selectedText } = props;
  const [comment, setComment] = useState({ id: '', heading: '', label: '' });
  const [label, setLabel] = useState(false);
  const [updatedText, setUpdatedText] = useState([]);
  const refActionColor = React.useRef();
  const [isColorPopoverOpen, setColorPopoverOpen] = useState(false);
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState('white');



  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const { updateCommentList, toggleCommentBox, toggleButtonsGroup } = props;

    if (comment) {
      const uniqueId = Date.now();

      wrapSelectedTextWithId(uniqueId);

      updateCommentList({
        id: uniqueId,
        selectedText,
        heading: comment.heading,
        label: comment.label,
        bgColor: bgColor,
      });
      toggleButtonsGroup();
      toggleCommentBox();
      reset();
      // setUpdatedText([...comment])
    }
  };

  const handleCommentChange = (e) => {
    const data = { ...comment }
    data.heading = e.target.value;
    setComment(data);
  };

  const handleLabelChange = (e) => {
    const data = { ...comment }
    data.label = e.target.value;
    setComment(data);
  };

  const reset = () => {
    setComment({
      id: '', heading: '', label: ''
    });
  };

  const wrapSelectedTextWithId = (uniqueId) => {
    const markWrapper = document.createElement("mark");
    markWrapper.setAttribute("id", uniqueId);
    props.selectedRange.surroundContents(markWrapper);
  };
  const theme = useTheme();


  return (

    <>



      <div hidden={hidden} >
        <form className="comment-box" onSubmit={handleCommentSubmit} style={{ backgroundColor: theme.custom.palette.noteBackground[bgColor] }}>
          <label htmlFor="commentBox" className="visuallyhidden">
            Add your comment
          </label>
          <input
            className="comment-box__text-area"
            placeholder="Add Heading"
            onChange={handleCommentChange}
            value={comment.heading}
          />
          <label htmlFor="select_text" className="visuallyhidden">Selected Text</label>
          {
            selectedText !== '' ? <textarea id="select_text" className="comment-box__text-area" value={selectedText}> </textarea> :
              <textarea className="comment-box__text-area" value='' placeholder="Add To Do"> </textarea>
          }

          <div className="add-label d-flex">
            <ColorPopover
              anchorEl={refActionColor.current}
              isOpen={isColorPopoverOpen}
              onClose={() => setColorPopoverOpen(false)}
              currentColor={color}
              onColorSelect={color => setColor(color)}
              setBgColor={setBgColor}
            />
            <Tooltip title="Change color">
              <IconButton
                size="medium"
                aria-label="change color"
                ref={refActionColor}
                onClick={() => setColorPopoverOpen(true)}
              >
                <PaletteIcon
                  fontSize="small"
                />
              </IconButton>
            </Tooltip>
            <div className="label-wrapper">
              {
                label ? <input
                  className="comment-box__text-area "
                  placeholder="Add label here"
                  onChange={handleLabelChange}
                  value={comment.label}
                />
                  : <Tooltip title="Add Label">
                    <IconButton
                      size="medium"
                      aria-label="Add Label"
                    >
                      <LabelIcon onClick={() => setLabel(true)} fontSize="medium" />
                    </IconButton>
                  </Tooltip>
              }
            </div>
          </div>
          <Button variation="primary" type="submit" className="comment-box__submit-button btn-main">
            submit
          </Button>
        </form>
      </div ></>
  );
}

export default CommentBox;
