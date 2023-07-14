import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "../userProfile";
import Posts from "../Posts";
import Gallery from "../Gallery";
import ToDo from "../ToDo";

function UserRoutes({
  id,
  name,
  username,
  email,
  profilepicture,
  company,
  website,
  address,
  phone,
}) {
  const personalData = useMemo(
    () => ({
      username,
      email,
      profilepicture,
      website,
      phone,
      name,
    }),
    [username, email, profilepicture, website, phone, name]
  );

  console.log("@@@@@@@", name);

  return (
    <Routes>
      <Route
        path="/profile"
        element={
          <UserProfile
            personalData={personalData}
            address={address}
            company={company}
          />
        }
      />
      <Route path="/posts" element={<Posts />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/toDo" element={<ToDo />} />
    </Routes>
  );
}

export default UserRoutes;
