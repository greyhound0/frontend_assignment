import React from "react";
import Header from "../../Elements/Header";
import SideBar from "../../Elements/SideBar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
    </div>
  );
}

export default Layout;
