import React from "react";
import DisplayPicture from "../DisplayPicture";

const Message = ({ text }) => (
  <div className="Message">
    <p>{text}</p>
  </div>
);
function Chat({ user }) {
  const messages = [
    "Hi, how are you?",
    "Haven't heard from you in a while",
    "Wanna catch up this weekend?",
  ];
  return (
    <div className="Chat">
      <div className="Chat__Header">
        <div className="Chat__Header__User">
          <DisplayPicture {...user} />
        </div>
      </div>
      <div className="Chat__Body">
        {messages?.map((message) => (
          <Message text={message} key={message} />
        ))}
      </div>
      <div className="Chat__Reply">
        <input type="text" placeholder="Type Here..." />
      </div>
    </div>
  );
}

export default Chat;
