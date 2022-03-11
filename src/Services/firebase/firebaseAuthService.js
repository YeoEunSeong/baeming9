import { authService } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
    console.error(e);
  }
};

const loginWithUserInfo = async (id, password) => {
  try {
    await signInWithEmailAndPassword(authService, id, password);
  } catch (e) {
    console.log(e);
  }
};

const logoutUserInfo = async () => {
  try {
    await signOut(authService);
  } catch (e) {
    console.log(e);
  }
};

export { createUserInfo, loginWithUserInfo, logoutUserInfo };
