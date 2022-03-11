import { authService } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate, Route } from "react-router-dom";
import setUserInfo from "./setUserInfo";

const createUserInfo = async (userInfo) => {
  try {
    await createUserWithEmailAndPassword(
      authService,
      userInfo.id,
      userInfo.password
    );
    setUserInfo(userInfo);
  } catch (e) {
    if (e === "auth/email-already-in-use") console.log("hello");
    console.error(e);
  }
};

export default createUserInfo;
