import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOptions />
    </div>
  );
}

export default Sidebar;
