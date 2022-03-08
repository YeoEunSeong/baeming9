import Routers from "./Routes/Routers";
import Navigator from "./Components/Header/Navigator";
import Footer from "./Components/Footer/Footer";
import { authService, dbService } from "./Services/firebase";

const App = () => {
  // console.log(authService.currentUser); -> 로그인 여부 체크
  return (
    <>
      <Navigator />
      <Routers />
      <Footer />
    </>
  );
};

export default App;
