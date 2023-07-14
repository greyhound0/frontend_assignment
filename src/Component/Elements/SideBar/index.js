import React, { useState } from "react";
import "./style.scss";
import { NavLink, useParams } from "react-router-dom";

function SideBar() {
  const { id } = useParams();

  const headingArray = [
    { name: "Profile", route: "/" + id + "/profile" },
    { name: "Posts", route: "/" + id + "/posts" },
    { name: "Gallery", route: "/" + id + "/gallery" },
    { name: "ToDo", route: "/" + id + "/toDo" },
  ];

  return (
    <div className="sidebar">
      {headingArray.map((heading, index) => (
        <NavLink
          className="sidebar__detailSelected"
          activeClassName="sidebar__detailSelected-active"
          key={index}
          to={heading.route}
        >
          {heading.name}
          <hr />
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar;
