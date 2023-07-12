import React from "react";
import RenderDetails from "../../Elements/RenderDetails";
import DisplayPicture from "../../Elements/DisplayPicture";

function PersonalDetail({
  username = "",
  email = "",
  phone = "",
  website = "",
  profilePicture,
}) {
  return (
    <div>
      <DisplayPicture large profilePicture={profilePicture} name={username} />
      <RenderDetails object={{ username, email, phone, website }} />;
    </div>
  );
}

export default PersonalDetail;
