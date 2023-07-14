import React from "react";
import RenderDetails from "../../Elements/RenderDetails";
import DisplayPicture from "../../Elements/DisplayPicture";

function PersonalDetail({
  username = "",
  email = "",
  phone = "",
  website = "",
  name = "",
  profilepicture,
}) {
  return (
    <div>
      <DisplayPicture large profilepicture={profilepicture} name={name} />
      <RenderDetails object={{ username, email, phone, website }} />
    </div>
  );
}

export default PersonalDetail;
