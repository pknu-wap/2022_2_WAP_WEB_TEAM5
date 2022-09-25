import React, { Fragment } from "react";
import "./RegisterPage.css";

function LandingPage() {
  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      <div class="sidenav">
        <div class="login-main-text">
          <img src="https://source.unsplash.com/random" class="image"></img>
          <h2>
            <br />
            Application
            <br /> Register Page
          </h2>
          <p>Login or register from here to access.</p>
        </div>
      </div>
      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <form>
              <div class="form-group">
                <label>ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group">
                <label>Password Check</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              {/* <button type="submit" class="btn btn-black">
                Login
              </button> */}
              <button type="submit" class="btn btn-secondary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
