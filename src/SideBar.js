import React from "react";
import "./SideBar.css";

import SideBarRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { Divider } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={ExploreIcon} title="Explore" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <Divider />
    </div>
  );
}

export default SideBar;
