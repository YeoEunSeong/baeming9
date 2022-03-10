import Routers from "./Routes/Routers";
import Navigator from "./Components/Header/Navigator";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
  // console.log(authService.currentUser); -> 로그인 여부 체크
  // let state = useSelector((state) => state);
  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchItemsData());
  // }, [dispatch]);

  return (
    <>
      <Navigator />
      <Routers />
      <Footer />
    </>
  );
};

export default App;
