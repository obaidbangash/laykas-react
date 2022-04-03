import { Button } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import "./CommentBox.css";

function CommentBox(props) {
  console.log(props.comments, "comments")
  const { hidden, selectedText } = props;
  const [comment, setComment] = useState({ id: '', heading: '', label: '' });
  const [label, setLabel] = useState(false);
  const [updatedText, setUpdatedText] = useState([]);

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
        label: comment.label
      });
      toggleButtonsGroup();
      toggleCommentBox();
      reset();
      // setUpdatedText([...comment])
    }
  };
  localStorage.setItem("CliptPath", JSON.stringify(updatedText));

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


  return (
    <div hidden={hidden}>
      <form className="comment-box" onSubmit={handleCommentSubmit}>
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
        <textarea id="select_text" className="comment-box__text-area" value={selectedText}>
        </textarea>
        <div className="add-label d-flex">
          {
            label ? <input
              className="comment-box__text-area"
              placeholder="Add label here"
              onChange={handleLabelChange}
              value={comment.label}
            />
              : <Button variation="link" onClick={() => setLabel(true)}> Add Label </Button>
          }
        </div>
        <Button variation="primary" type="submit" className="comment-box__submit-button btn-main">
          submit
        </Button>
      </form>
    </div >
  );
}

export default CommentBox;
