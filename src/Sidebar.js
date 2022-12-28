import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <HomeIcon />
    </div>
  );
}

export default Sidebar;
