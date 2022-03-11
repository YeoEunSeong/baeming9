import { authService } from "../firebase/firebase";

const FETCH_LOGIN_INFO = "FETCH_LOGIN_INFO";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_FAIL = "SIGN_IN_FAIL";

const fetchLoginInfo = () => async (dispatch) => {
  try {
    const isLogin = authService.currentUser;
    dispatch({ type: FETCH_LOGIN_INFO, payload: isLogin });
  } catch (e) {
    console.log(e);
  }
};

export default fetchLoginInfo;
