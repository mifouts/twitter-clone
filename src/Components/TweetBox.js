import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import pfp from "./EportfolioPICTURE.jpg";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src={pfp} />
          <input type="text" placeholder="What's Happening?" />
          <input type="text" placeholder="Enter Image URL" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
