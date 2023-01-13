import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import pfp from "./EportfolioPICTURE.jpg";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        displayName="mitch fouts"
        username="mfouts"
        verified={true}
        text="yooo"
        avatar={pfp}
        image="https://media.giphy.com/media/Kiy0bxDn36N6LgLMh4/giphy.gif"
      />
    </div>
  );
}

export default Feed;
