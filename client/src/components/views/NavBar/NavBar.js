import React from "react";
import logo_img from "./logo1.png";

function NavBar() {
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
          height: "80px",
        }}
      >
        <a className="navbar-brand" href="/main">
          <img src={logo_img} width="100" height="50" alt="" />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
