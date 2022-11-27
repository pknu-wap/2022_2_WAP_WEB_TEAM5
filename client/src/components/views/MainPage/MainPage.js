import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import GrammerForm from "./sections/GrammerForm";
import NavBar from "../NavBar/NavBar";

import "./MainPage.css";

import Form from "./sections/Form";
import GrammerTag from "./sections/GrammerTag";

import Question from "./sections/Question";
import Folder from "./sections/Folder";
// 사전 기능 ,

import HiddenTag from "./sections/HiddenTag";
import MemoForm from "./sections/MemoForm";
import MemoTag from "./sections/MemoTag";

import {
  CoverState,
  CompanyListState,
  MemoState,
  TokenState,
  UserIdState,
  fileClickIdState,
} from "./Atom";
import { useRecoilState } from "recoil";

function MainPage() {
  // const [Cover, setCover] = useState([]); // 파일을 저장
  const [Grammer, setGrammer] = useState(false);
  // 맞춤법 검사 탭이 열려있냐 안 열려있냐 판단
  const [Memo, setMemo] = useRecoilState(MemoState);
  const [MemoToggle, setMemoToggle] = useState(false);
  const [ListToggle, setListToggle] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Company, setCompany] = useState("");

  const [CompanyList, setCompanyList] = useRecoilState(CompanyListState);
  // 폴더의 list가 저장됨
  const [fileClickId, setfileClickId] = useRecoilState(fileClickIdState);

  const [Loading, setLoading] = useState(false);
  // Loading 여부 판단
  const [Cov, setCov] = useState("");

  const [Cover, setCover] = useRecoilState(CoverState);
  const [Token, setToken] = useRecoilState(TokenState);
  const [userId, setuserId] = useRecoilState(UserIdState);

  const [GrammerText, setGrammerText] = useState([]);

  const first = async () => {
    setLoading(true);
    console.log(Token);
    try {
      const response = await axios.get(
        // "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
        `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=${userId}`,
        {
          headers: {
            Authorization: Token,
            // Authorization: `JWT ${Token}`,
          },
        }
      );
      console.log(response);
      setCompanyList(response.data.list);
      console.log(CompanyList);

      setCover(response.data.list[0].cover_letter);
      setLoading(false);
      setCov(response.data.list[0].title);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // 메인페이지가 처음 랜더링 될 때 정보들을
    first();
  }, []);

  const toggleListFunction = () => {
    setListToggle(!ListToggle);
  };
  const GrammerReHandler = async () => {
    try {
      const response = await axios.get(
        `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/spell-check?id=${fileClickId}`,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      console.log(response);
      setGrammerText(response.data.errInfo);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(GrammerText);

  return (
    <div>
      <div>
        <NavBar loc="main" Loading={Loading} />
        {/* 네비게이션 바 출력 */}
      </div>
      <Grid templateColumns="repeat(20, 1fr)" h="92vh">
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
            overflow: "scroll",
            minWidth: "100px",
          }}
          sx={{ "::-webkit-scrollbar": { display: "none" } }}>
          <Folder
          // 이곳은 폴더들의 내용이 담겨있음
          />
        </GridItem>
        {ListToggle ? (
          <GridItem // 파일 칸
            sx={{ "::-webkit-scrollbar": { display: "none" } }}
            colSpan={ListToggle ? 3 : 0}
            style={{
              height: "10px",
              backgroundColor: "#303136",
              height: "100%",
              overflow: "scroll",
            }}>
            <Question Cov={Cov} setCov={setCov} />
            {/* <HiddenTag
              ListToggle={ListToggle}
              refreshfunction={toggleListFunction}
            /> */}
          </GridItem>
        ) : (
          <GridItem
            colSpan={0}
            style={{
              backgroundColor: "#d9d9d9",
            }}>
            <HiddenTag
              ListToggle={ListToggle}
              refreshfunction={toggleListFunction}
            />
          </GridItem>
        )}
        {/* {Grammer ? ( */}
        {/* // 문법이 켜져있다면, */}

        <GridItem // 나머지 20칸 중에서 16칸을 차지함
          colSpan={ListToggle ? 16 : 18}
          style={{
            backgroundColor: "#d9d9d9",
            height: "100%",
            minWidth: "800px",
          }}>
          <div style={{ display: "flex", height: "100%" }}>
            {/* 제목, 내용 입력 칸이랑 맞춤법 검사 태그를 묶는 태그 */}
            {ListToggle && (
              <HiddenTag
                ListToggle={ListToggle}
                refreshfunction={toggleListFunction}
              />
            )}
            <Form />
            {/* 제목과 내용 입력칸 */}
            <div
              style={{
                width: "1.5%",
                height: "40%",
                display: "flex",
                flexDirection: "column",
              }}>
              <GrammerTag
                MemoToggle={MemoToggle}
                setMemoToggle={setMemoToggle}
                Grammer={Grammer}
                setGrammer={setGrammer}
              />
              {/* 맞춤법 검사 태그 */}

              <MemoTag
                MemoToggle={MemoToggle}
                setMemoToggle={setMemoToggle}
                Grammer={Grammer}
                setGrammer={setGrammer}
              />
            </div>

            {Grammer ? (
              <div // 맞춤법 검사 칸의 제일 큰 흰색 네모
                style={{
                  marginLeft: "0.5%",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  marginTop: "8%",
                  width: "30%",
                  height: "580px",
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
                    alignItems: "center",
                    marginBottom: "5px",
                    display: "flex",
                  }}>
                  맞춤법 검사
                </div>
                <div>
                  <Button
                    w={4}
                    h={4}
                    style={{ float: "right" }}
                    onClick={GrammerReHandler}>
                    <RepeatIcon />
                  </Button>
                </div>

                <GrammerForm
                  GrammerText={GrammerText}
                  style={{
                    backgroundColor: "black",
                    width: "100px",
                    height: "100px",
                  }}
                />

                {/* 맞춤법 검사 내용들(나중에는 map으로 해야할 거 같음..?!) */}
              </div>
            ) : (
              <div></div>
            )}
            {MemoToggle ? (
              <div // 맞춤법 검사 칸의 제일 큰 흰색 네모
                style={{
                  // marginLeft: "0.5%",
                  marginLeft: "0.5%",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  marginTop: "8%",
                  width: "30%",
                  height: "580px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "1%",
                }}>
                <MemoForm />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </GridItem>
      </Grid>
    </div>
  );
}

export default MainPage;
