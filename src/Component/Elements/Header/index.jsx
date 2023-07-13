import React from "react";
import DisplayPicture from "../DisplayPicture";

function Header({ heading }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3>Heading</h3>
        <DisplayPicture name="Manas Gupta" />
      </div>
      <hr />
    </div>
  );
}

export default Header;
