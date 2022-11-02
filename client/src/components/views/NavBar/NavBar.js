import React from "react";
import logo_img from "./lala1.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const navHandler = () => {
    navigate("/main");
  };

  return (
    <div
      style={{
        boxShadow: "0px 4px 4px -4px black",
        backgroundColor: "white",
        height: "64px",
        paddingLeft: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
      }}
    >
      <img
        src={logo_img}
        onClick={navHandler}
        style={{ width: "100px", height: "40px", cursor: "pointer" }}
        alt=""
      />
    </div>
  );
}

export default NavBar;
