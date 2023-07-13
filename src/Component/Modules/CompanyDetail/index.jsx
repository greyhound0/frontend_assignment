import React from "react";
import RenderDetails from "../../Elements/RenderDetails";

function CompanyDetails(props = { Name: "", Catchphrase: "", Bs: "" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Company</h4>
      <RenderDetails object={props} />
    </div>
  );
}

export default CompanyDetails;
