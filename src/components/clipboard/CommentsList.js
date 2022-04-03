import { Grid, View } from "@aws-amplify/ui-react";
import React from "react";
import './selected-text.css'

// Keep comment.id as Date.now() of commented time
const CommentsList = ({ comments }) => (
  <section className="selected-section">
    <div className="container">
      <Grid gap="24px" className="selected-card-wrapper"
        templateColumns="1fr 1fr 1fr"
        alignItems="center"
      >
        {
          comments?.map((comment) => (
            <View key={comment.id} className="selected-card">
              <h3>{comment.heading}</h3>
              <a href={`#${comment.id}`}>
                {comment.selectedText}
              </a>
              <h6>{comment.label}</h6>
            </View>
          ))
        }
      </Grid >
    </div>
  </section>
);

export default CommentsList;
