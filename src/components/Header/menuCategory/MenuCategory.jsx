import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import menuList from "../../../data/menuList";
const MenuCategory = (props) => {
  // const dispatch = useDispatch();
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
