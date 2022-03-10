import React from "react";
import { Link } from "react-router-dom";
import MenuCategory from "./menuCategory/MenuCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navigator = (props) => {
  // let { checkLoginReducer } = useSelector((state) => state);

  return (
    <nav>
      <div>
        <Link to="/">
          <h1>배민방구</h1>
        </Link>
        <div>
          <label></label>
          <input type="text" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      {/* <div>
        {checkLoginReducer ? (
          <>
            <Link to="/myPage">마이페이지</Link>
            <Link to="/myPage">장바구니</Link>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </div> */}
      <MenuCategory />
    </nav>
  );
};

export default Navigator;
