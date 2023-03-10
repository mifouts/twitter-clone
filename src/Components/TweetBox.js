import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import pfp from "./EportfolioPICTURE.jpg";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("Posts").add({
      displayName: "Mitch Fouts",
      username: "mfouts",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: pfp,
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src={pfp} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's Happening?"
          />
        </div>

        <input
          type="text"
          placeholder="Optional: Enter Image URL"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
