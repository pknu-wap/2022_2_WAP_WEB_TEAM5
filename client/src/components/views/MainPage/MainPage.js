import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import "./MainPage.css";
import logo_img from "../NavBar/lala1.png";

import Question from "./sections/Question";
import Folder from "./sections/Folder";
import Form from "./sections/Form";
// 사전 기능 ,

function MainPage() {
  const [Title, setTitle] = useState("");
  const [Text, setText] = useState("");

  const updateTitle = (title) => {
    setTitle(title);
  };

  const updateText = (text) => {
    setText(text);
  };

  useEffect(() => {
    if (Title && Title.length > 0) {
      console.log(Title);
    }
  }, [Title]);

  useEffect(() => {
    if (Text && Text.length > 0) {
      console.log(Text);
    }
  }, [Text]);

  const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/account");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div>
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
          <Menu>
            <MenuButton
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#505050",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            ></MenuButton>
            <MenuList minWidth="100px" style={{ width: "120px" }}>
              <MenuItem style={{ width: "120px" }} onClick={handleProfile}>
                마이페이지
              </MenuItem>
              <MenuItem style={{ width: "120px" }} onClick={handleAccount}>
                계정관리
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </div>
      <Grid templateColumns="repeat(20, 1fr)">
        <GridItem // 폴더 칸
          colSpan={1}
          style={{
            backgroundColor: "#212226",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Folder />
        </GridItem>
        <GridItem // 파일 칸
          colSpan={3}
          ms={0}
          height="10px"
          style={{ backgroundColor: "#303136", height: "100vh" }}
        >
          <Question />
        </GridItem>
        <GridItem
          colSpan={16}
          height="10px"
          style={{ backgroundColor: "#d9d9d9", height: "100vh" }}
        >
          <Form
            updateTitle={updateTitle}
            updateText={updateText}
            title={Title}
            text={Text}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default MainPage;
