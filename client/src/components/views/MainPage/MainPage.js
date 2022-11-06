import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import GrammerForm from "./sections/GrammerForm";
import NavBar from "../NavBar/NavBar";

import "./MainPage.css";
import logo_img from "../NavBar/lala1.png";

import Form from "./sections/Form";
import FormG from "./sections/FormG";

import Question from "./sections/Question";
import Folder from "./sections/Folder";
// 사전 기능 ,

function MainPage() {
  const [Cover, setCover] = useState([]);
  const [Grammer, setGrammer] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
      )
      .then((response) => {
        setCover(response.data.list[0].cover_letter[0]);
      });
  }, []);

  const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/account");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const navHandler = () => {
    navigate("/main");
  };

  const grammerHandler = () => {
    setGrammer(!Grammer);
  };

  const logoutHandler = () => {
    alert("로그아웃 되셨습니다.");
  };

  return (
    <div>
      <div>
        <NavBar loc="main" />
      </div>
      <Grid templateColumns="repeat(20, 1fr)" h="90vh">
        <GridItem // 폴더 칸
          colSpan={1}
          style={{
            backgroundColor: "#212226",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Folder />
        </GridItem>

        <GridItem // 파일 칸
          colSpan={3}
          height="10px"
          style={{
            backgroundColor: "#303136",
            height: "100%",
          }}
        >
          <Question />
        </GridItem>
        {Grammer ? (
          <GridItem
            colSpan={16}
            // height="10px"
            style={{
              backgroundColor: "#d9d9d9",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", height: "100%" }}>
              <Form title={Cover.question} text={Cover.description} />
              <div // 오른쪽에 달린 태그
                style={{
                  backgroundColor: "#303136",
                  color: "white",
                  height: "min-content",
                  width: "2%",
                  marginTop: "50px",
                  overflow: "hidden",
                  fontSize: "13px",
                  cursor: "pointer",
                  padding: "0.1%",
                  textAlign: "center",
                }}
                onClick={grammerHandler}
              >
                맞춤법검사(켜짐)
              </div>
              <div // 네모
                style={{
                  marginLeft: "0.5%",
                  backgroundColor: "white",
                  marginTop: "5%",
                  width: "25%",
                  height: "555px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "scroll",
                }}
              >
                <div // 네모의 제일 상위 제목
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "20px",
                    color: "black",
                    marginBottom: "5px",
                  }}
                >
                  맞춤법 검사
                </div>
                <GrammerForm />
                <GrammerForm />
                <GrammerForm />
                <GrammerForm />
                <GrammerForm />
              </div>
            </div>
          </GridItem>
        ) : (
          <GridItem
            colSpan={16}
            style={{
              backgroundColor: "#d9d9d9",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", height: "100%" }}>
              <FormG title={Cover.question} text={Cover.description} />
              <div
                style={{
                  backgroundColor: "#303136",
                  color: "white",
                  height: "min-content",
                  width: "2%",
                  marginTop: "50px",
                  overflow: "hidden",
                  fontSize: "13px",
                  cursor: "pointer",
                  padding: "0.1%",
                  textAlign: "center",
                }}
                onClick={grammerHandler}
              >
                맞춤법검사
              </div>
            </div>
          </GridItem>
        )}
      </Grid>
    </div>
  );
}

export default MainPage;
