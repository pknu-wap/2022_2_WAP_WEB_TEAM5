import React from "react";
import logo_img from "./logo1.png";
// import logo_img2 from "./logo2.png";
// import { useNavigate } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  // const navigate = useNavigate();

  // const handleProfile = () => {
  //   navigate("/profile");
  // };

  // const handleAccount = () => {
  //   navigate("/account");
  // };
  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      <nav
        className="navbar navbar-light bg-light"
        style={{
          boxShadow: "0px 4px 4px -4px black",
        }}
      >
        <a className="navbar-brand" href="/main">
          <img src={logo_img} width="100" height="50" alt="" />
        </a>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "#505050",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        ></div>
      </nav>
    </div>
  );
}

export default NavBar;
