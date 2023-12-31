import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ProfileList({ userImage, userName, id }) {
  const navigate = useNavigate();

  const moveToProfile = () => {
    navigate("/" + id + "/" + "profile");
  };

  return (
    <div>
      <div onClick={() => moveToProfile()} className="listCard">
        <img src={userImage} alt="image" className="image" />
        <div className="userName">{userName}</div>
      </div>
      <hr />
    </div>
  );
}

export default ProfileList;
