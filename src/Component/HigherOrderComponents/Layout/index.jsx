import React, { useEffect, useState } from "react";
import Header from "../../Elements/Header";
import SideBar from "../../Elements/SideBar";
import { useLocation, useParams } from "react-router-dom";
import SignOut from "../../Elements/SignOut";
import ChatBox from "../../Elements/ChatBox";

function Layout({ Component, userList }) {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [activeUser, setActiveUser] = useState({});
  const [otherProfiles, setOtherProfiles] = useState([]);
  const [showLogoutOptions, setShowLogoutOptions] = useState(false);

  useEffect(() => {
    if (userList?.length) {
      setActiveUser(userList?.find((user) => user?.id == id));
      const activeIndex = userList?.findIndex((item) => item?.id == id);

      if (activeIndex > userList?.length - 3) {
        setOtherProfiles([
          userList[activeIndex - 1],
          userList[activeIndex - 2],
        ]);
      } else {
        setOtherProfiles([
          userList[activeIndex + 1],
          userList[activeIndex + 2],
        ]);
      }
    }
  }, [id, userList]);

  const getHeading = () => {
    return pathname.split("/")[2]?.toUpperCase();
  };

  useEffect(() => {
    setShowLogoutOptions(false);
  }, [id]);

  const chatUsers = userList?.filter?.((user) => user?.id != id);
  return (
    <div
      style={{
        position: "relative",
        height: "calc(100vh - 50px)",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        columnGap: "24px",
        width: "100vw",
        padding: "24px",
      }}
    >
      <SideBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header
          heading={getHeading()}
          name={activeUser?.name}
          profilepicture={activeUser?.profilepicture}
          setShowLogoutOptions={setShowLogoutOptions}
        />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <Component {...activeUser} />
          </div>
        </div>
      </div>
      {showLogoutOptions ? (
        <SignOut
          profilepicture={activeUser?.profilepicture}
          name={activeUser?.name}
          email={activeUser?.email}
          otherProfiles={otherProfiles}
        />
      ) : null}
      <ChatBox userList={chatUsers} />
    </div>
  );
}

export default Layout;
