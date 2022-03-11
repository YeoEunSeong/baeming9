import React from "react";
import { Route, Routes } from "react-router-dom";
import Items from "../Components/Main/ItemList/Items";
import Login from "../Components/Main/Login/Login";
import SignUp from "../Components/Main/Signup/SignUp";

const Routers = (props) => {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Routers;
