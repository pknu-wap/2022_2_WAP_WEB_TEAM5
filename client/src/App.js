import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import MainPage from "./components/views/MainPage/MainPage";
import Account from "./components/views/Account/Account";
import Profile from "./components/views/Profile/Profile";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
