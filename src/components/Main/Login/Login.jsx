import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = (props) => (
  <section>
    <LoginForm />
    <button>Google</button>
    <Link to="/signup">회원가입</Link>
    <span>아이디 찾기</span>
    <span>비밀번호 찾기</span>
  </section>
);

export default Login;
