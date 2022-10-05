import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/main");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      <div className="sidenav">
        <div className="login-main-text">
          <img
            src="https://source.unsplash.com/random"
            className="image"
            alt="No"
          ></img>
          <h2>
            <br />
            Application
            <br /> Landing Page
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              {/* <button type="submit" className="btn btn-black">
                Login
              </button> */}
              <button
                type="submit"
                className="btn btn-secondary btn-lg btn-block"
                onClick={handleSubmit}
              >
                Login
              </button>
              {/* <br /> */}
              <br />
              <div className="goto" onClick={handleSignup}>
                Sign up
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
