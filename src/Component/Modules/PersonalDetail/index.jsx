import React from "react";
import RenderDetails from "../../Elements/RenderDetails";
import DisplayPicture from "../../Elements/DisplayPicture";

function PersonalDetail({
  Username = "",
  Email = "",
  Phone = "",
  Website = "",
  ProfilePicture,
}) {
  return (
    <div>
      <DisplayPicture large profilePicture={ProfilePicture} name={Username} />
      <RenderDetails object={{ Username, Email, Phone, Website }} />;
    </div>
  );
}

export default PersonalDetail;
