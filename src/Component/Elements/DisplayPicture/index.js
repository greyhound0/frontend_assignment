import React from "react";
import "./style.scss";

function DisplayPicture({ large, profilepicture, name }) {
  const size = large ? 200 : 35;
  return (
    <div
      className="DisplayPicture"
      style={large ? { flexDirection: "column" } : {}}
    >
      <img
        src={profilepicture}
        alt={name}
        className={"DisplayPicture__Image"}
        width={size}
        height={size}
      />
      <p
        className="DisplayPicture__Name"
        style={{
          fontWeight: large ? "700" : "550",
          fontSize: large ? "1.4rem" : "1rem",
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default DisplayPicture;
