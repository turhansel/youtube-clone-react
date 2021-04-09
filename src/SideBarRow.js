import React from "react";
import "./SideBarRow.css";

function SideBarRow({ Icon, title }) {
  return (
    <div className="sideBarRow">
      <Icon className="sidebarrow-icon" />
      <h2 className="sidebarrow-title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
