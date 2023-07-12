import React from "react";
import PersonalDetail from "../../Modules/PersonalDetail";
import CompanyDetails from "../../Modules/CompanyDetail";
import Address from "../../Modules/Address";
import { useRoutes } from "react-router-dom";

function UserProfile({ users }) {
  const route = useRoutes();
  const id = route.params.id;
  const user = users?.find((user) => user?.id == id);

  const { profilePicture, email, phone, username, website } = user;
  return (
    <div>
      <PersonalDetail
        profilePicture={profilePicture}
        email={email}
        key={"personalDetails"}
        phone={phone}
        username={username}
        website={website}
      />
      <CompanyDetails name="" catchphrase="" bs="" key={"companyDetails"} />
      <Address />
    </div>
  );
}

export default UserProfile;
