import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://mobile.twitter.com/withoutafout/photo" />
          <input type="text" placeholder="What's Happening?" />
        </div>

        <input
          type="text"
          placeholder="Optional: Enter Image URL"
          className="tweetBox__imageInput"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
