import React from "react";
import { Link } from "react-router-dom";
import MenuCategory from "./menuCategory/MenuCategory";

const Navigator = (props) => {
  return (
    <nav>
      <Link to="/">
        {/* 로고 */}
        <h1>배민방구</h1>
      </Link>
      <MenuCategory />
    </nav>
  );
};

export default Navigator;
