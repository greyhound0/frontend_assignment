import React from "react";
import RenderDetails from "../../Elements/RenderDetails";

function CompanyDetails(props = { Name: "", Catchphrase: "", Bs: "" }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "30%",
      }}
    >
      <div
        style={{
          fontSize: "1.3rem ",
          color: "rgba(0,0,0,0.4)",
          fontWeight: "500",
        }}
      >
        Company
      </div>
      <RenderDetails object={props} />
    </div>
  );
}

export default CompanyDetails;
