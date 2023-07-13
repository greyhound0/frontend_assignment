import React from "react";
import RenderDetails from "../../Elements/RenderDetails";

function Address(props = { Street: "", Zipcode: "", Suite: "", City: "" }) {
  return (
    <div>
      <h4>Address: </h4>
      <RenderDetails object={props} />;
    </div>
  );
}

export default Address;
