import React from "react";
import "./style.scss";

function DisplayPicture({ large, profilePicture, name }) {
  const size = large ? 150 : 40;
  return (
    <div
      className="DisplayPicture"
      style={large ? { flexDirection: "column" } : {}}
    >
      <img
        src={profilePicture}
        alt={name}
        className={"DisplayPicture__Image"}
        width={size}
        height={size}
      />
      <p
        className="DisplayPicture__Name"
        style={{ fontWeight: large ? 700 : 400 }}
      >
        {name}
      </p>
    </div>
  );
}

export default DisplayPicture;
