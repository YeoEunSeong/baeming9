import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MenuCategory from "./menuCategory/MenuCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { logoutUserInfo } from "../../Services/firebase/firebaseAuthService";
import { useDispatch } from "react-redux";
import "./Navigator.css";

const Navigator = (props) => {
  const { isLoginReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const userLogout = async () => {
    try {
      logoutUserInfo();
      dispatch({ type: "COMPLETE_LOGOUT" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <nav>
      <div className="nav__logoSearch">
        <Link to="/">
          <div>
            <img className="logo" src="/assets/logo.png" alt="logo" />
            <h1 className="sr-only">배민방구</h1>
          </div>
        </Link>
        <div className="nav__search">
          <label className="sr-only" for="nav__search--input">
            검색
          </label>
          <input
            id="nav__search--input"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </div>
      </div>
      <div className="nav__subNav">
        {isLoginReducer ? (
          <>
            <Link to="/myPage">마이페이지</Link>
            <Link to="/myPage">장바구니</Link>
            <button onClick={userLogout}>로그아웃</button>
          </>
        ) : (
          <div>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        )}
      </div>
      <div className="nav__menuCategory">
        <MenuCategory />
      </div>
    </nav>
  );
};

export default Navigator;
