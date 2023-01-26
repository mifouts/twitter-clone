import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }) => {
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div className="post__footer">
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <SendIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
