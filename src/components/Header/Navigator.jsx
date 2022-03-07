import React from "react";
import { Link } from "react-router-dom";
import MenuCategory from "./menuCategory/MenuCategory";

const Navigator = (props) => {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>배민방구</h1>
        </Link>
        <div>
          <label></label>
          <input type="text" />
          <button />
        </div>
      </div>
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/myPage">마이페이지</Link>
        <Link to="/myPage">장바구니</Link>
      </div>
      <MenuCategory />
    </nav>
  );
};

export default Navigator;
