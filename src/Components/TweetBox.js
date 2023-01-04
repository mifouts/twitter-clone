import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar img="./EportfolioPICTURE.jpg" />
          <input type="text" placeholder="What's Happening?" />
          <input type="text" placeholder="Enter Image URL" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
