import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { authService } from "../../../Services/firebase/firebase";
import { createUserInfo } from "../../../Services/firebase/firebaseAuthService";

const SignUpForm = (props) => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputNameRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const userInfo = {
        id: inputEmailRef.current.value,
        password: inputPasswordRef.current.value,
        name: inputNameRef.current.value,
      };
      createUserInfo(userInfo);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h2>회원가입</h2>
      <fieldset>
        <legend>회원가입</legend>
        <div>
          <label>닉네임</label>
          <input ref={inputNameRef} />
          <button>중복체크</button>
        </div>
        <div>
          <label>아이디</label>
          <input ref={inputEmailRef} />
          <button>중복체크</button>
        </div>
        <div>
          <label>비밀번호</label>
          <input ref={inputPasswordRef} />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input />
        </div>
        <button type="submit">회원가입</button>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
