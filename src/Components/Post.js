import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import pfp from "./EportfolioPICTURE.jpg";
import { VerifiedUser } from "@material-ui/icons";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={pfp} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Mitch{" "}
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Build a twitter clone!</p>
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Post;
