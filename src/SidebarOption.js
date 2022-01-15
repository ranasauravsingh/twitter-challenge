import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  // Using props and passing text and icon as a component

  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
