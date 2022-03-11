import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { authService } from "../../../Services/firebase/firebase";

const LoginForm = (props) => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    const [email, password] = [
      inputEmailRef.current.value,
      inputPasswordRef.current.value,
    ];

    // const data = await signInWithEmailAndPassword(authService, email, password);
    // await signInWithEmailAndPassword(authService, Email, password);
  };

  const onClick = () => {
    // console.log(inputIdRef.current.value);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h2>로그인</h2>
      <fieldset>
        <legend>회원로그인</legend>
        <div>
          <label>아이디</label>
          <input ref={inputEmailRef} />
        </div>
        <div>
          <label>비밀번호</label>
          <input ref={inputPasswordRef} />
        </div>
        <button type="submit" onClick={onClick}>
          로그인
        </button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
