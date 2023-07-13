import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function SideBar({ id }) {
  const navigate = useNavigate();
  const headingArray = [
    { name: "Profile", route: "/profile/:id" },
    { name: "Posts", route: "/posts/:id" },
    { name: "Gallery", route: "/gallery/:id" },
    { name: "ToDo", route: "/toDo/:id" },
  ];

  const navigateToHeading = (route) => {
    navigate(route);
  };

  return (
    <div className="sidebar">
      {headingArray.map((heading, index) => (
        <div key={index} onClick={() => navigateToHeading(heading.route)}>
          {heading.name}
        </div>
      ))}
      <hr />
    </div>
  );
}

export default SideBar;
