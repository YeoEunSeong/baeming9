import React from "react";
import { Route, Routes } from "react-router-dom";
import Items from "../Components/Main/ItemList/Items";
import Login from "../Components/Main/Login/Login";

const Routers = (props) => {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Items />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routers;
