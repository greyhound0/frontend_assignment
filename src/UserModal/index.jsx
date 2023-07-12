import React from "react";
import "./style.css";
import ProfileList from "./ProfileList";

function UserModal({ apiData }) {
  console.log("modalData", apiData);
  return (
    <div>
      <h3 className="modalHeader">Select an Account</h3>
      <div className="modal">
        <div className="modalBody">
          {apiData?.users?.map((user) => {
            return (
              <ProfileList
                userImage={user.profilepicture}
                userName={user.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserModal;
