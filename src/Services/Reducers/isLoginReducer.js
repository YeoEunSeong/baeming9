import { authService } from "../firebase/firebase";

const initialState = false;

const isLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_INFO":
      const isLogin = action.payload;
      return isLogin;

    case "COMPLETE_LOGIN":
      const LoginInfo = authService.currentUser;
      let login = LoginInfo ? true : false;
      return login;

    case "COMPLETE_LOGOUT":
      return false;

    default:
      return state;
  }
};

export default isLoginReducer;
