import React from "react";
import Address from "../../Modules/Address";
import CompanyDetails from "../../Modules/CompanyDetail";
import PersonalDetail from "../../Modules/PersonalDetail";

function UserProfile({ personalData, company, address }) {
  console.log("USERPROFILE ADDRESS", address);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "50px",
        marginTop: "50px",
        fontSize: "40px",
      }}
    >
      <div className="userDetailOnLeft">
        <PersonalDetail {...personalData} />
        <hr style={{ width: "70%" }} />
        <CompanyDetails {...company} />
      </div>

      <Address {...address} />
    </div>
  );
}

export default UserProfile;
