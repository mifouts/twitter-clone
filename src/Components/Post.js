import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import pfp from "./EportfolioPICTURE.jpg";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={pfp} />
      </div>
    </div>
  );
}

export default Post;
