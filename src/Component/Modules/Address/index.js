import React from "react";
import RenderDetails from "../../Elements/RenderDetails";
import LocationPicture from "../../Elements/LocationPicture";

function Address({ street = "", zipcode = "", suite = "", city = "", geo }) {
  return (
    <div>
      <div
        style={{
          fontSize: "1.3rem",
          fontWeight: "500",
          color: "rgba(0,0,0,0.4)",
        }}
      >
        Address:{" "}
      </div>
      <RenderDetails object={{ street, suite, city, zipcode }} />
      <LocationPicture {...geo} />
    </div>
  );
}

export default Address;
