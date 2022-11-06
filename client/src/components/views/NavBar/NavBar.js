import React, { useState, useEffect } from "react";
import logo_img from "./lala1.png";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import axios from "axios";

function NavBar(props) {
  const navigate = useNavigate();
  const [Main, setMain] = useState(false);

  const handleAccount = () => {
    navigate("/account");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const navHandler = () => {
    navigate("/main");
  };

  const logoutHandler = () => {
    alert("로그아웃 되셨습니다.");
  };

  useEffect(() => {
    if (props.loc === "main") {
      setMain(true);
      console.log("메인 페이지입니다.");
    }
  }, []);

  return (
    <div
      // style={{
      //   boxShadow: "0px 4px 4px -4px black",
      //   backgroundColor: "white",
      //   height: "64px",
      //   paddingLeft: "20px",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "left",
      // }}
      className="navbar navbar-light bg-light"
      style={{
        boxShadow: "0px 4px 4px -4px black",
        height: "64px",
        paddingLeft: "20px",
      }}
    >
      <img
        src={logo_img}
        onClick={navHandler}
        style={{ width: "100px", height: "40px", cursor: "pointer" }}
        alt=""
      />
      {!Main ? (
        <div></div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              marginRight: "20px",
              width: "50px",
              // height: "40px",
              fontWeight: "bold",
            }}
            onClick={logoutHandler}
          >
            logout
          </button>
          <Menu>
            <MenuButton>
              <DragHandleIcon
                style={{ width: "40px", height: "40px", marginRight: "9px" }}
              />
            </MenuButton>
            <MenuList minWidth="100px" style={{ width: "120px" }}>
              <MenuItem style={{ width: "120px" }} onClick={handleProfile}>
                마이페이지
              </MenuItem>
              <MenuItem style={{ width: "120px" }} onClick={handleAccount}>
                계정관리
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default NavBar;
