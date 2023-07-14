import React from "react";
import { useState } from "react";
import DisplayPicture from "../DisplayPicture";
import "./styles.scss";
import Chat from "./Chat";

function ChatBox({ userList = [] }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div className="ChatboxWrapper">
      {selectedUser ? <Chat user={selectedUser} /> : null}
      <div className="ChatBox">
        <div
          className="ChatBox__Header"
          onClick={() => {
            setShowUsers((showUsers) => !showUsers);
            setSelectedUser(null);
          }}
        >
          Chat Now
        </div>
        <div
          className="ChatBox__List"
          style={{ height: showUsers ? "300px" : 0 }}
        >
          {userList?.map((user) => (
            <div
              className="ChatBox__List__User"
              key={user?.id}
              onClick={() => setSelectedUser(user)}
            >
              <DisplayPicture {...user} />
              <span
                className="ChatBox__List__User__Status"
                style={{
                  backgroundColor: Math.random() < 0.5 ? "grey" : "green",
                }}
              />
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default ChatBox;
