import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="body">
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>
                </div>
                <form action="" method="post" name="login">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="form-group">
                    <p className="text-center">
                      By signing up you accept our <a href="#">Terms Of Use</a>
                    </p>
                  </div>

                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                    >
                      Login
                    </button>
                  </div>

                  {/* <div class="col-md-12 ">
                      <div class="login-or">
                        <hr class="hr-or" />
                        <span class="span-or">or</span>
                      </div>
                    </div> */}

                  <div className="form-group">
                    <p className="text-center">
                      Don't have account?{" "}
                      <a href="#" id="signup">
                        Sign up here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
