import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, Route } from "react-router-dom";
import { authService } from "../../../Services/firebase/firebase";
import { loginWithUserInfo } from "../../../Services/firebase/firebaseAuthService";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginWithUserInfo(
        inputEmailRef.current.value,
        inputPasswordRef.current.value
      );
      dispatch({ type: "COMPLETE_LOGIN" });
      // <Route path="*" element={<Navigate replace to="/" />} />;
    } catch (e) {
      console.log(e);
    }
    // const data = await signInWithEmailAndPassword(authService, email, password);
    // await signInWithEmailAndPassword(authService, Email, password);
  };

  return (
    <form className="login__form" onSubmit={(e) => onSubmit(e)}>
      <h2 className="sr-only">로그인</h2>
      <fieldset>
        <legend className="login__head">회원로그인</legend>
        <div className="login__input">
          <label>아이디</label>
          <input ref={inputEmailRef} />
        </div>
        <div className="login__input">
          <label>비밀번호</label>
          <input ref={inputPasswordRef} />
        </div>
        <button className="login__button" type="submit">
          로그인
        </button>
      </fieldset>
      <div className="login__sub">
        <Link to="/signup">회원가입</Link>
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
      </div>
    </form>
  );
};

export default LoginForm;
