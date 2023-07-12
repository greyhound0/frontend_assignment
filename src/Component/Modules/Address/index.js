import React from "react";
import RenderDetails from "../../Elements/RenderDetails";

function Address(props = { name: "", catchphrase: "", bs: "" }) {
  return (
    <div>
      <h4>Address: </h4>
      <RenderDetails object={props} />;
    </div>
  );
}

export default Address;
