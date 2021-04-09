import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import MicIcon from "@material-ui/icons/Mic";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <img src="./logo.png" alt="logo" className="header-logo" />
      </div>

      <div className="header-input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header-search-icon" />
        {/* <MicIcon className="header-mic-icon" /> */}
      </div>

      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar alt="Turhan Sel" src="/profile.jpg" />
      </div>
    </div>
  );
}

export default Header;
