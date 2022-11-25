import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, Modal,
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
  Button } from "@chakra-ui/react";
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

import { CoverState, CompanyListState, MemoState, TokenState } from "./Atom";
import { useRecoilState } from "recoil";

function MainPage() {
  // const [Cover, setCover] = useState([]); // 파일을 저장
  const [Grammer, setGrammer] = useState(false);
  // 맞춤법 검사 탭이 열려있냐 안 열려있냐 판단
  const [Memo, setMemo] = useRecoilState(MemoState);
  const [ListToggle, setListToggle] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const [Company, setCompany] = useState("");


  const [CompanyList, setCompanyList] = useRecoilState(CompanyListState);
  // 폴더의 list가 저장됨

  const [Loading, setLoading] = useState(false);
  // Loading 여부 판단
  const [Cov, setCov] = useState("");

  const [Cover, setCover] = useRecoilState(CoverState);
  const [Token, setToken] = useRecoilState(TokenState);

  const first = async () => {
    setLoading(true);
    console.log(Token)
    try {
      const response = await axios.get(
        // "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
        `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=${Token}`
      );
      console.log(response)
      setCompanyList(response.data.list);
      console.log(CompanyList)

      setCover(response.data.list[0].cover_letter); 
      setLoading(false);
      setCov(response.data.list[0].title);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // 메인페이지가 처음 랜더링 될 때 정보들을 
    set();
  }, []);
  
  const set = async() => {
    await first();
    if(CompanyList.length===0) {
      onOpen()
    }
  }

  const FolUpdate = async () => {
    // 서버에서 새로 값들을 받아옴(폴더에 관한 내용 처리)
    setLoading(true);
    const response = await axios.get(
      `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=${Token}`
    );
    setCompanyList(response.data.list);
    setLoading(false);
  };

  const companyHandler = (event) => {
    // 회사의 이름 적는 칸 실시간으로 받아와서 Company에 저장
    setCompany(event.currentTarget.value);
  };

  const companyclickHandler = async() => {
    
    const body = {
      user_id: Token,
      title: Company,
    };
    
    axios.post(
      "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/lists",
      body
    );
    FolUpdate()
  }

  const toggleListFunction = () => {
    setListToggle(!ListToggle);
  };

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
            minWidth: "80px",
          }}>
          <Folder
          // 이곳은 폴더들의 내용이 담겨있음
          />
        </GridItem>
        {ListToggle ? (
          <GridItem // 파일 칸
            colSpan={3}
            height="10px"
            style={{
              backgroundColor: "#303136",
              height: "100%",
              overflow: "scroll",
            }}>
            <Question Cov={Cov} setCov={setCov} />
            <HiddenTag
              ListToggle={ListToggle}
              refreshfunction={toggleListFunction}
            />
          </GridItem>
        ) : (
          <GridItem colSpan={0}>
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
            // minWidth: "800px",
          }}>
          <div style={{ display: "flex", height: "100%" }}>
            {/* 제목, 내용 입력 칸이랑 맞춤법 검사 태그를 묶는 태그 */}

            <Form />
            {/* 제목과 내용 입력칸 */}

            <GrammerTag
              Memo={Memo}
              setMemo={setMemo}
              Grammer={Grammer}
              setGrammer={setGrammer}
            />
            {/* 맞춤법 검사 태그 */}

            <MemoTag
              Memo={Memo}
              setMemo={setMemo}
              Grammer={Grammer}
              setGrammer={setGrammer}
            />

            {Grammer ? (
              <div // 맞춤법 검사 칸의 제일 큰 흰색 네모
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
                {/* 맞춤법 검사 내용들(나중에는 map으로 해야할 거 같음..?!) */}
                <GrammerForm />
                <GrammerForm />
                <GrammerForm />
                <GrammerForm />
              </div>
            ) : (
              <div></div>
            )}
            {Memo ? <MemoForm /> : <div></div>}
          </div>
        </GridItem>
      </Grid>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ marginTop: "10px" }}>
            이름을 정해주세요
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>회사 이름</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Company"
                value={Company}
                onChange={companyHandler}
                focusBorderColor="gray.300"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                companyclickHandler();
                onClose();
              }}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default MainPage;
