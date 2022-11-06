import React, { useState, useEffect, useRef } from "react";
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
  const [Cover, setCover] = useState([]);
  // 몇 번 폴더의 몇 번 파일의 데이터가 들어있음(현재는 0,0)
  // 이걸로 title과 content 가져옴
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
    axios
      .get(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
      )
      .then((response) => {
        // data.list : 폴더, cover_letter : 파일
        setCover(response.data.list[0].cover_letter[0]);
        setCompanyList(response.data.list);
      });
  }, []);

  const grammerHandler = () => {
    setGrammer(!Grammer);
  };
  let nextId = CompanyList.length + 1;

  const onUpdate = (company) => {
    // 자식에서 return 받은 회사 값으로 state에 저장시켜준다.
    const body = {
      cover_letter: [],
      list_id: nextId,
      title: company,
    };
    setCompanyList([...CompanyList, body]);

    nextId += 1;
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
