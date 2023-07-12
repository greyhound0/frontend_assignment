import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserModal from "./UserModal";
import UserProfile from "./userProfile";
import DisplayPicture from "./Component/Elements/DisplayPicture";
import UserDetailCard from "./Component/Elements/UserDetailCard";
import PersonalDetailCard from "./Component/Modules/PersonalDetail";
function App() {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      console.log("repooooaaa", response);

      setApiData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData();
      console.log("apiDataaaaaaaaaaaaaaaaaaaaaaaaaaa", apiData);
    })();
  }, []);

  console.log("apiDataaaaaaaaaaaaaaaaaaaaaaaaaaa", apiData);

  return (
    <div className="App">
      <PersonalDetailCard
        username="Manas"
        email="manas@manas"
        phone="9897970778"
        website="greyhound.com"
      />
      <UserDetailCard />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserModal apiData={apiData} />} />
          <Route path="/user/:id" element={<UserProfile apiData={apiData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
