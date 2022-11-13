import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import GrammerForm from "./sections/GrammerForm";
import NavBar from "../NavBar/NavBar";

import "./MainPage.css";

import Form from "./sections/Form";
import GrammerTag from "./sections/GrammerTag";

import Question from "./sections/Question";
import Folder from "./sections/Folder";
// 사전 기능 ,

function MainPage() {
  const [Cover, setCover] = useState([]); // 파일을 저장
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

  const [Loading, setLoading] = useState(false);
  // Loading 여부 판단

  // const [circleId, setCircleId] = useState(0);

  useEffect(() => {
    // 메인페이지가 처음 랜더링 될 때 정보들을 가져옴
    setLoading(true);
    axios
      .get(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
      )
      .then((response) => {
        // console.log(response.data.list);
        console.log(response.data);
        // data.list : 폴더, cover_letter : 파일
        // setCover(response.data.list[0].cover_letter);
        setCompanyList(response.data.list);
        // console.log(CompanyList);
        setLoading(false);
      });
  }, []);

  let nextId = CompanyList.length; // id를 현재 배열에 저장되어있는 길이를 구해줌

  const onUpdate = (company) => {
    // 자식에서 return 받은 company 값을 state에 저장시켜준다.
    const body = {
      // if(CompanyList.filter((company) => company.list_id === ))
      // cover_letter: CompanyList[circleId].cover_letter,
      cover_letter: [],
      list_id: nextId,
      title: company,
    };
    setCompanyList([...CompanyList, body]);
  };

  const circleClick = (id) => {
    const cov = CompanyList.filter((company) => company.list_id === id);
    // CompanyList에 담겨져있는 폴더들을 살피면서 클릭한 id와 같은 것을 추출해냄
    setCover(cov[0].cover_letter);
    // 클릭한 id에 해당하는 파일들을 Cover에 담음
  };

  // let fileId = CompanyList[id].cover_letter.length; // id를 현재 배열에 저장되어있는 길이를 구해줌
  const onfileUpdate = (content) => {
    // 자식에서 return 받은 title 값을 state에 저장 시킨다.
    const body = {
      description: "",
      descriptionLock: false,
      // id: fileId,
      question: "",
      questionLock: false,
      title: content,
    };
    setCover([...Cover, body]);
  };

  return (
    <div>
      <div>
        <NavBar loc="main" Loading={Loading} />
        {/* 네비게이션 바 출력 */}
      </div>
      <Grid templateColumns="repeat(20, 1fr)" h="90vh">
        {/* chakra의 grid를 사용하는데, 총 메인 페이지의 열을 20개의 열로 나눔 */}
        <GridItem // 폴더 칸
          // 이 곳은 폴더의 전체칸으로, 20개의 열 중에 한 개의 열만 사용한다.
          colSpan={1}
          style={{
            backgroundColor: "#212226",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Folder
            // 이곳은 폴더들의 내용이 담겨있음
            CompanyList={CompanyList}
            setCompanyList={setCompanyList}
            refreshFunction={onUpdate}
            circleOnClick={circleClick}
          />
        </GridItem>

        <GridItem // 파일 칸
          colSpan={3}
          height="10px"
          style={{
            backgroundColor: "#303136",
            height: "100%",
          }}>
          <Question
            CompanyList={CompanyList} // CompanyList를 넘겨줘서 젤 위의 회사 명이 출력되도록 함
            Cover={Cover} // 폴더 내용을 받아올 수 있도록 함
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
            }}>
            <div style={{ display: "flex", height: "100%" }}>
              <Form />
              <GrammerTag Grammer={Grammer} setGrammer={setGrammer} />
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
                  marginRight: "1%",
                }}>
                <div // 네모의 제일 상위 제목
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "20px",
                    color: "black",
                    marginBottom: "5px",
                  }}>
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
            }}>
            <div style={{ display: "flex", height: "100%" }}>
              <Form grammer="no" />
              <GrammerTag Grammer={Grammer} setGrammer={setGrammer} />
            </div>
          </GridItem>
        )}
      </Grid>
    </div>
  );
}

export default MainPage;
