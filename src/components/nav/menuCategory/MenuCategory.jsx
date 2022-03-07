import React from "react";
import { Link } from "react-router-dom";

import menuList from "../../../data/menuList";
const MenuCategory = (props) => {
  return (
    <ul>
      {menuList.map((category) => (
        <Link to={`/${category.link}`}>
          <li>{category.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuCategory;
