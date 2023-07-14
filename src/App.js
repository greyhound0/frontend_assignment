import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserModal from "./UserModal";
import UserDetailCard from "./Component/Elements/UserDetailCard";
import Header from "./Component/Elements/Header";
import Layout from "./Component/HigherOrderComponents/Layout";
import ComingSoon from "./Component/Elements/ComingSoon";
import UserProfile from "./Component/Pages/userProfile";
import UserRoutes from "./Component/Pages/UserRoutes";
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
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<UserModal apiData={apiData} />} />
          <Route
            path="/:id/*"
            element={
              <Layout userList={apiData?.users} Component={UserRoutes} />
              //   {/* <UserRoutes /> */}
              // {/* </Layout> */}
            }
          />
        </Routes>
        {/* </Layout> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
{
  /* <Route
            path="/:id/profile"
            element={
              <Layout>
                <UserProfile apiData={apiData} />
              </Layout>
            }
          />
          <Route
            path="/:id/posts"
            element={
              <Layout>
                <ComingSoon />
              </Layout>
            }
          />
          <Route
            path="/:id/gallery"
            element={
              <Layout>
                <ComingSoon />
              </Layout>
            }
          />
          <Route
            path="/:id/toDo"
            element={
              <Layout>
                <ComingSoon />
              </Layout>
            }
          /> */
}
