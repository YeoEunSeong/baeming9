import Routers from "./Routes/Routers";
import Navigator from "./Components/Header/Navigator";
import Footer from "./Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import fetchLoginInfo from "./Services/actions/loginAction";
import { useEffect } from "react";
import { Reset } from "styled-reset";

const App = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoginInfo());
  }, [dispatch]);

  return (
    <>
      <Reset />
      <Navigator />
      <Routers />
      <Footer />
    </>
  );
};

export default App;
