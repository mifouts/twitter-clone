import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvinicius73.github.io%2Fgravatar-url-generator%2F&psig=AOvVaw3m0YXXoIF4GKFOTxabVOWo&ust=1674770599428000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCICytunc4_wCFQAAAAAdAAAAABAE" />
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
