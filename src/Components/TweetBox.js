import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import pfp from "./EportfolioPICTURE.jpg";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src={pfp} />
          <input
            value={tweetMessage}
            type="text"
            placeholder="What's Happening?"
          />
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
