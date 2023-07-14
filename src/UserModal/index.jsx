import React from "react";
import "./style.scss";
import ProfileList from "./ProfileList";

function UserModal({ apiData }) {
  return (
    <div className="UserModalWrapper">
      <div className="UserModal">
        <h3 className="UserModal__Header">Select an Account</h3>
        <div className="UserModal__Body">
          {apiData?.users?.map((user) => {
            return (
              <ProfileList
                userImage={user.profilepicture}
                userName={user.name}
                id={user.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserModal;
