import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import GrammerForm from "./sections/GrammerForm";
import NavBar from "../NavBar/NavBar";

import "./MainPage.css";

import Form from "./sections/Form";
import FormG from "./sections/FormG";

import Question from "./sections/Question";
import Folder from "./sections/Folder";
// 사전 기능 ,

function MainPage() {
  const [Cover, setCover] = useState([
    // 파일을 저장
    {
      description: "",
      descriptionLock: false,
      id: 0,
      question: "",
      questionLock: false,
      title: "",
    },
  ]);
  const [Grammer, setGrammer] = useState(false);

  // 맞춤법 검사 탭이 열려있냐 안 열려있냐 판단
  const [CompanyList, setCompanyList] = useState([
    {
      cover_letter: [],
      list_id: 0,
      title: "",
    },
  ]);
  // 폴더의 list가 저장됨

  useEffect(() => {
    // 메인페이지가 처음 랜더링 될 때 정보들을 가져옴
    axios
      .get(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
      )
      .then((response) => {
        // data.list : 폴더, cover_letter : 파일
        setCover(response.data.list[0].cover_letter);
        setCompanyList(response.data.list);
      });
  }, []);

  const grammerHandler = () => {
    setGrammer(!Grammer);
  };

  let nextId = CompanyList.length + 1; // id를 현재 배열에 저장되어있는 길이 +1을 해줌

  const onUpdate = (company) => {
    // 자식에서 return 받은 company 값을 state에 저장시켜준다.
    const body = {
      cover_letter: [],
      list_id: nextId,
      title: company,
    };
    setCompanyList([...CompanyList, body]);
  };

  let fileId = Cover.length + 1; // id를 현재 배열에 저장되어있는 길이 +1을 해줌
  const onfileUpdate = (content) => {
    // 자식에서 return 받은 title 값을 state에 저장 시킨다.
    const body = {
      description: "",
      descriptionLock: false,
      id: fileId,
      question: "",
      questionLock: false,
      title: content,
    };
    setCover([...Cover, body]);
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
          <Folder
            CompanyList={CompanyList}
            setCompanyList={setCompanyList}
            refreshFunction={onUpdate}
          />
        </GridItem>

        <GridItem // 파일 칸
          colSpan={3}
          height="10px"
          style={{
            backgroundColor: "#303136",
            height: "100%",
          }}
        >
          <Question
            CompanyList={CompanyList}
            Cover={Cover}
            setCover={setCover}
            refreshFunction={onfileUpdate}
          />
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
