import React from "react";
import Address from "../../Modules/Address";
import CompanyDetails from "../../Modules/CompanyDetail";
import PersonalDetail from "../../Modules/PersonalDetail";
import "./style.scss";

function UserProfile({ personalData, company, address }) {
  console.log("USERPROFILE ADDRESS", address);

  return (
    <div className="userProfile">
      <div className="userProfile__personal">
        <PersonalDetail {...personalData} />
        <hr style={{ width: "70%" }} />
        <CompanyDetails {...company} />
      </div>

      <Address {...address} />
    </div>
  );
}

export default UserProfile;
