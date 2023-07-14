import React from "react";
import DisplayPicture from "../DisplayPicture";
function Header({ heading, name, profilepicture, setShowLogoutOptions }) {
  return (
    <div className="Header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3>{heading}</h3>
        <span
          onClick={() =>
            setShowLogoutOptions((showLogoutOptions) => !showLogoutOptions)
          }
        >
          <DisplayPicture name={name} profilepicture={profilepicture} />
        </span>
      </div>
      <hr style={{ marginLeft: "50px" }} />
    </div>
  );
}

export default Header;
