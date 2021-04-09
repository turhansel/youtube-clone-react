import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { Divider } from "@material-ui/core";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={ExploreIcon} title="Explore" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <Divider />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch later" />
      <SideBarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SideBarRow Icon={ExpandMoreIcon} title="Show more" />
      <Divider />
    </div>
  );
}

export default SideBar;
