import React from "react";
import "./SideBar.scss";

function SideBarRow({ selected, Icon, title }) {
  return (
    <div className={`sideBarRow ${selected && "selected"}`}>
      <Icon className="sidebarrow-icon" />
      <h2 className="sidebarrow-title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
