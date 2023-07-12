import React from "react";
import RenderDetails from "../../Elements/RenderDetails";

function CompanyDetails(props = { name: "", catchphrase: "", bs: "" }) {
  return (
    <div>
      <h4>Company</h4>
      <RenderDetails object={props} />;
    </div>
  );
}

export default CompanyDetails;
