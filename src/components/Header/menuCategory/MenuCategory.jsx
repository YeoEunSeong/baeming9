import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MenuCategory.css";

import menuList from "../../../data/menuList";
const MenuCategory = (props) => {
  // const dispatch = useDispatch();
  return (
    <ul className="menuCategory">
      {menuList.map((category, number) => (
        <li key={`category+${number}`}>
          <Link to={`/${category.link}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuCategory;
