import { Grid, View } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import './selected-text.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useTheme } from "@material-ui/styles";
import ColorPopover from "./ColorPopover"
import "./CommentBox.css";
import { IconButton, Tooltip } from "@material-ui/core";
import {
  PaletteOutlined as PaletteIcon
} from "@material-ui/icons";


const CommentsList = ({ comments, setComments }) => {
  const theme = useTheme();

  const refActionColor = React.useRef();
  const [isColorPopoverOpen, setColorPopoverOpen] = useState(false);
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState('white');




  // delete List
  const onRemoveList = (i) => {
    const data = [...comments];
    const updatedData = data.splice(i, 1)
    setComments(data)
  }

  useEffect(() => {
    if (!bgColor) {
      setBgColor(comments.bgColor)
    }
  }, [comments.bgColor])


  return (

    <section className="selected-section">
      <div className="container">
        <Grid gap="24px" className="selected-card-wrapper"
          templateColumns="1fr 1fr 1fr 1fr"
          alignItems="strech"
        >
          {
            comments?.map((comment, index) => (
              <View key={comment.id} className="selected-card" style={{ backgroundColor: theme.custom.palette.noteBackground[comment.bgColor] }}>
                <h3>{!comment.heading ? "Title" : comment.heading}</h3>
                {comment.selectedText ?
                  <a href={`#${comment.id}`}>
                    {comment.selectedText}
                  </a> :
                  <p>{comment.customText}</p>
                }
                <h6>{comment.label}</h6>
                <Grid gap="24px"
                  templateColumns="1fr 1fr 1fr 1fr"
                  alignItems="center"
                  justifyContent="center">
                  <Tooltip title="Delete List">
                    <IconButton
                      size="medium"
                      aria-label="Delete List"
                      ref={refActionColor}
                      onClick={() => setColorPopoverOpen(true)}
                    >
                      <DeleteOutlineIcon onClick={() => {
                        onRemoveList(index)
                      }} fontSize="medium" />
                    </IconButton>
                  </Tooltip>
                  {/* <ColorPopover
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
                        fontSize="medium"
                      />
                    </IconButton>
                  </Tooltip> */}
                </Grid>
              </View>
            ))
          }
        </Grid >
      </div>
    </section>
  );
}

export default CommentsList;
