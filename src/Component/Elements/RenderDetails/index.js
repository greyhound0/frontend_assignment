import React from "react";
import UserDetailCard from "../UserDetailCard";

function RenderDetails({ object }) {
  return (
    <div>
      {Object.keys(object)?.map((key) => (
        <UserDetailCard key={key} label={key} value={object[key]} />
      ))}
    </div>
  );
}

export default RenderDetails;
