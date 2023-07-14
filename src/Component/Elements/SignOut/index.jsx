import React from "react";
import DisplayPicture from "../DisplayPicture";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function SignOut({ name, email, profilepicture, otherProfiles = [] }) {
  const navigate = useNavigate();
  return (
    <div className="signoutCard">
      <DisplayPicture profilepicture={profilepicture} />
      <p>{name}</p>
      <p>{email}</p>
      <hr />
      {otherProfiles?.map((user, index) => (
        <div
          onClick={() => navigate("/" + user?.id + "/profile")}
          key={user?.id}
        >
          {index ? <hr /> : null}
          <DisplayPicture {...user} />
        </div>
      ))}
      <button onClick={() => navigate("/")}>Sign Out</button>
    </div>
  );
}

export default SignOut;
