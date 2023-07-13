import React from "react";
import Address from "../../Modules/Address";
import CompanyDetails from "../../Modules/CompanyDetail";
import PersonalDetail from "../../Modules/PersonalDetail";

function UserProfile({ apiData }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <PersonalDetail
          Username="Manas"
          Email="manas@manas"
          Phone="9897970778"
          Website="greyhound.com"
        />
        <CompanyDetails
          Name="Bla"
          Catchphrase="catch me if you can"
          Bs="booooo"
        />
      </div>
      <Address Street="Baker's" City="Delhi" Suite="101" Zipcode="226011" />
    </div>
  );
}

export default UserProfile;
