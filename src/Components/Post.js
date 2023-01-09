import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import pfp from "./EportfolioPICTURE.jpg";
import { VerifiedUser } from "@material-ui/icons";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";

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
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Build a twitter clone!</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/Kiy0bxDn36N6LgLMh4/giphy.gif"
          alt=""
        />
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

export default Post;
