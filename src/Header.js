import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <h1>I am a header</h1>
      <MenuIcon />
      <img src="./logo.svg" alt="logo" className="header-logo" />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar alt="Turhan Sel" src="/profile.jpg" />
    </div>
  );
}

export default Header;
