import {
  RouterAuthProvider,
} from "./component/Router/RouterAuth";
import { Route, Routes, } from "react-router";
import Home from "./component/Router/Home";
import Navigatin from "./component/Router/Navigatin";
import LoginPage from "./component/Context/AuthContent/LoginPage";
import { ProviderContext } from "./component/Context/AuthContent/providerContext";
import ProtectedRoute from "./component/Router/ProtectedRoute";

const App = () => {
  return (
    <RouterAuthProvider>
      <ProviderContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/navigate" 
            element={
              <ProtectedRoute>
                <Navigatin />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </ProviderContext>
    </RouterAuthProvider>
  );
};

export default App;
