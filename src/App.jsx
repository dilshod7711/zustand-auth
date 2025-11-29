import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/login/Login";
import Faq from "./components/faq/Faq";
import Profile from "./pages/profile/Profile";
import PrivateRequest from "./components/privateRequest/PrivateRequest";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route element={<PrivateRequest />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
