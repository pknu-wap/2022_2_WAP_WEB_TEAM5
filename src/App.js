import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
// import MainPage from "./components/views/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route exact path="/main" component={MainPage} /> */}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
