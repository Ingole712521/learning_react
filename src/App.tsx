import  { useContext } from "react";
import {
  RouterAuthContext,
  RouterAuthProvider,
} from "./component/Router/RouterAuth";
import { Route, Routes } from "react-router";
import Home from "./component/Router/Home";
import Navigatin from "./component/Router/Navigatin";
import LoginPage from "./component/Context/AuthContent/LoginPage";

const App = () => {
  const isAuth = useContext(RouterAuthContext);

  return (
    <RouterAuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuth?.isAuth ? (
          <Route path="/navigate" element={<Navigatin />} />
        ) : (
          <Route path="/login" element={<LoginPage />} />
        )}
      </Routes>
    </RouterAuthProvider>
  );
};

export default App;
