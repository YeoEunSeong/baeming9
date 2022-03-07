import React from "react";
import { Route, Routes } from "react-router-dom";
import Items from "../Components/Main/ItemList/Items";

const Routers = (props) => {
  return (
    <>
      {/* <Routes exact path="/"></Routes> */}
      <Routes>
        <Route path="/:id" element={<Items />} />
      </Routes>
    </>
  );
};

export default Routers;
