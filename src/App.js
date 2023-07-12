import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import UserModal from "./UserModal";
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
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserModal apiData={apiData} />
        </div>
        <Routes>
          <Route path="/" />
          <Route path="/:userName" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
