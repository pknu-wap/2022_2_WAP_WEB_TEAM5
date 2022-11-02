import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormLabel,
  FormControl,
  useDisclosure,
} from "@chakra-ui/react";

function Profile() {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  const initialRef = React.useRef(null);

  //취득 자격증
  const dateHandler = (event) => {
    setDate(event.currentTarget.value);
  };
  const nameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const infoHandler = (event) => {
    setInfo(event.currentTarget.value);
  };
  //수상 경력
  const dateHandler2 = (event) => {
    setDate2(event.currentTarget.value);
  };
  const nameHandler2 = (event) => {
    setName2(event.currentTarget.value);
  };
  const infoHandler2 = (event) => {
    setInfo2(event.currentTarget.value);
  };
  //인적사항
  const typeHandler = (event) => {
    setType(event.currentTarget.value);
  };
  const myInfoHandler = (event) => {
    setMyInfo(event.currentTarget.value);
  };

  const memoHandler = (event) => {
    setMemo(event.currentTarget.value);
  };

  //취득 자격증
  let [Date, setDate] = useState("");
  let [Name, setName] = useState("");
  let [Info, setInfo] = useState("");
  let [Content, setContent] = useState([]);
  //수상 경력
  let [Date2, setDate2] = useState("");
  let [Name2, setName2] = useState("");
  let [Info2, setInfo2] = useState("");
  let [Content2, setContent2] = useState([]);
  //인적사항
  let [Type, setType] = useState("");
  let [MyInfo, setMyInfo] = useState("");
  let [MyContent, setMyContent] = useState([]);
  //메모
  let [Memo, setMemo] = useState("");

  const updateContent = () => {
    setDate([...Date, Date]);
    setName([...Name, Name]);
    setInfo([...Info, Info]);

    const con = { date: Date, name: Name, info: Info };
    setContent([...Content, con]);

    setDate("");
    setName("");
    setInfo("");
  }; //취득 자격증
  const updateContent2 = () => {
    setDate2([...Date2, Date2]);
    setName2([...Name2, Name2]);
    setInfo2([...Info2, Info2]);

    const con2 = { date2: Date2, name2: Name2, info2: Info2 };
    setContent2([...Content2, con2]);

    setDate2("");
    setName2("");
    setInfo2("");
  }; //수상 경력

  const updateContent3 = () => {
    setType([...Type, Type]);
    setMyInfo([...MyInfo, MyInfo]);

    const con3 = { type: Type, myInfo: MyInfo };
    setMyContent([...MyContent, con3]);

    setType("");
    setMyInfo("");
  }; //인적사항

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#eceff1" }}>
      <NavBar />
      <div className="left-nav">
        <div className="profile-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="radius-img"
            alt=""
          />
        </div>
        <div
          style={{
            borderBottom: "1px solid black",
            width: "100%",
            paddingLeft: "10px",
            paddingTop: "5%",
            marginLeft: "5%",
            marginBottom: "10px",
          }}
        >
          <h4>인적사항</h4>
        </div>
        <div
          className="my-info"
          style={{ overflow: "scroll", maxWidth: "100%" }}
        >
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen3}
            kjy
            onClose={onClose3}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>인적사항을 입력해주세요.</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>인적사항 종류</FormLabel>
                  <Input
                    ref={initialRef}
                    value={Type}
                    placeholder="ex) 이름"
                    onChange={typeHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>내 정보</FormLabel>
                  <Input
                    placeholder="ex) 홍길동"
                    value={MyInfo}
                    onChange={myInfoHandler}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="gray"
                  onClick={() => {
                    updateContent3();
                    onClose3();
                  }}
                  mr={3}
                >
                  Save
                </Button>
                <Button onClick={onClose3}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "40%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
                borderBottom: "1px solid black",
              }}
            >
              인적사항 종류
            </h6>
            {MyContent &&
              MyContent.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    padding: "5px",
                    borderBottom: "1px solid grey",
                  }}
                >
                  {contents.type}
                </div>
              ))}
          </div>

          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "45%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginBottom: "0",
                marginTop: "5px",
                backgroundColor: "#d9d9d9",
              }}
            >
              내 정보
            </h6>
            {MyContent &&
              MyContent.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents.myInfo}
                </div>
              ))}
          </div>
          <Button
            variant="outline"
            colorScheme="blue"
            onClick={onOpen3}
            style={{
              width: "50px",
              height: "30px",
            }}
          >
            추가
          </Button>
        </div>
      </div>

      <div className="right-nav">
        <div className="type">
          <h4>취득 자격증</h4>
        </div>
        <div
          className="type-content"
          style={{ overflow: "scroll", maxWidth: "100%" }}
        >
          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "30%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
              }}
            >
              날짜
            </h6>
            {/* content에 정보가 있으면, 날짜값 출력 */}
            {Content &&
              Content.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents.date}
                </div>
              ))}
          </div>
          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "30%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
              }}
            >
              자격증명
            </h6>
            {Content &&
              Content.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents.name}
                </div>
              ))}
          </div>
          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "30%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
              }}
            >
              상세정보
            </h6>
            {Content &&
              Content.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents.info}
                </div>
              ))}
          </div>

          <Button
            variant="outline"
            colorScheme="blue"
            onClick={onOpen1}
            style={{
              width: "50px",
              height: "30px",
            }}
          >
            추가
          </Button>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen1}
            onClose={onClose1}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>취득 자격증 정보를 입력해주세요.</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>날짜</FormLabel>
                  <Input
                    ref={initialRef}
                    value={Date}
                    placeholder="ex) 2022.10.1"
                    onChange={dateHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>자격증명</FormLabel>
                  <Input
                    placeholder="ex) 정보처리"
                    value={Name}
                    onChange={nameHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>상세정보</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="ex) 기사"
                    value={Info}
                    onChange={infoHandler}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updateContent();
                    onClose1();
                  }}
                  mr={3}
                >
                  Save
                </Button>
                <Button onClick={onClose1}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        <div className="type">
          <h4>수상 경력</h4>
        </div>
        <div
          className="type-content"
          style={{ overflow: "scroll", maxWidth: "100%" }}
        >
          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "30%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
              }}
            >
              날짜
            </h6>
            {Content2 &&
              Content2.map((contents2, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents2.date2}
                </div>
              ))}
          </div>
          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "30%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
              }}
            >
              대회명
            </h6>
            {Content2 &&
              Content2.map((contents2, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents2.name2}
                </div>
              ))}
          </div>
          <div
            className="contents"
            style={{
              display: "inline-block",
              width: "30%",
              height: "100%",
              marginRight: "10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "5px",
                borderBottom: "1px solid black",
                marginTop: "5px",
                marginBottom: "0",
                backgroundColor: "#d9d9d9",
              }}
            >
              상세정보
            </h6>
            {Content2 &&
              Content2.map((contents2, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}
                >
                  {contents2.info2}
                </div>
              ))}
          </div>

          <Button
            variant="outline"
            colorScheme="blue"
            onClick={onOpen2}
            style={{
              width: "50px",
              height: "30px",
            }}
          >
            추가
          </Button>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen2}
            onClose={onClose2}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>수상 경력 정보를 입력해주세요.</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>날짜</FormLabel>
                  <Input
                    ref={initialRef}
                    value={Date2}
                    placeholder="ex) 2022.10.1"
                    onChange={dateHandler2}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>대회명</FormLabel>
                  <Input
                    placeholder="ex) 아이디어톤"
                    value={Name2}
                    onChange={nameHandler2}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>상세정보</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="ex) 대상"
                    value={Info2}
                    onChange={infoHandler2}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updateContent2();
                    onClose2();
                  }}
                  mr={3}
                >
                  Save
                </Button>
                <Button onClick={onClose2}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>

        <div className="type">
          <h4>메모장</h4>
        </div>
        <div className="type-content">
          <textarea
            type="text"
            value={Memo}
            onChange={memoHandler}
            style={{
              width: "100%",
              height: "100%",
              resize: "none",
              border: "none",
              outline: "0",
            }}
          ></textarea>
          <Button
            variant="outline"
            colorScheme="gray"
            onClick={() => {
              setMemo([Memo]);
              console.log([Memo]);
            }}
            style={{ float: "right", height: "30px" }}
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
