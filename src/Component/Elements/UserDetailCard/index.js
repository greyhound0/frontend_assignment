import React from "react";
import "./style.scss";

function UserDetailCard({ label, value }) {
  return (
    <div className="userDetailCard">
      <p className="userDetailCard__label">{label}</p>
      <span>:</span>
      <span className="userDetailCard__value">{value}</span>
    </div>
  );
}

export default UserDetailCard;
