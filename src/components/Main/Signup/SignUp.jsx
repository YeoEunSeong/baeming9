import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignUp = (props) => {
  let [signUpWay, setSignUpWay] = useState(null);

  const signUpToBaemin = () => {
    setSignUpWay(true);
  };

  return (
    <>
      {signUpWay ? (
        <SignUpForm />
      ) : (
        <section>
          <button onClick={signUpToBaemin}>배민문방구로 회원가입</button>
          <button>Google로 회원가입</button>
          <span>
            이미 배밍방구 회원이신가요?
            <Link to="/login">로그인</Link>
          </span>
        </section>
      )}
    </>
  );
};

export default SignUp;
