import { Grid, View } from "@aws-amplify/ui-react";
import React from "react";
import './selected-text.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useTheme } from "@material-ui/styles";
import "./CommentBox.css";
import { IconButton, Tooltip } from "@material-ui/core";

const CommentsList = ({ comments, setComments }) => {
  const Moment = require('moment')
  const theme = useTheme();
  const refActionColor = React.useRef();

  // delete List
  const onRemoveList = (i) => {
    const data = [...comments];
    const updatedData = data.splice(i, 1)
    setComments(data)
  }

  return (

    <section className="selected-section">
      <div className="container">
        <Grid gap="24px" className="selected-card-wrapper"
          templateColumns="1fr 1fr 1fr 1fr"
          alignItems="strech"
        >
          {
            comments?.map((comment, index) => {
              const dateTimeAgo = Moment(comment.posted_date).fromNow();
              return (
                <View key={comment.id} className="selected-card" style={{ backgroundColor: theme.custom.palette.noteBackground[comment.bgColor] }}>
                  <h3>{!comment.heading ? "Title" : comment.heading}</h3>
                  {comment.selectedText ?
                    <a href={`#${comment.id}`}>
                      {comment.selectedText}
                    </a> :
                    <p>{comment.customText}</p>
                  }
                  <h6>{comment.label}</h6>
                  <span><b>Added:</b> {dateTimeAgo}</span>
                  <Grid gap="24px"
                    templateColumns="1fr 1fr 1fr 1fr"
                    alignItems="center"
                    justifyContent="center">
                    <Tooltip title="Delete List">
                      <IconButton
                        size="medium"
                        aria-label="Delete List"
                        ref={refActionColor}
                        onClick={() => {
                          onRemoveList(index);
                        }}
                      >
                        <DeleteOutlineIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>

                  </Grid>
                </View>
              )
            })
          }
        </Grid >
      </div>
    </section>
  );
}

export default CommentsList;
