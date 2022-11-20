import React from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
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
  border,
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
  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();

  const initialRef = React.useRef(null);

  const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/account");
  };
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
  const orgHandler = (event) => {
    setOrg(event.currentTarget.value);
  };
  const gradeHandler = (event) => {
    setGrade(event.currentTarget.value);
  };
  const infoHandler2 = (event) => {
    setInfo2(event.currentTarget.value);
  };

  //어학 성적
  const dateHandler3 = (event) => {
    setDate3(event.currentTarget.value);
  };
  const nameHandler3 = (event) => {
    setName3(event.currentTarget.value);
  };
  const infoHandler3 = (event) => {
    setInfo3(event.currentTarget.value);
  };
  //인적사항
  const schoolHandler = (event) => {
    setSchool(event.currentTarget.value);
  };
  const majorHandler = (event) => {
    setMajor(event.currentTarget.value);
  };
  const degreeHandler = (event) => {
    setDegree(event.currentTarget.value);
  };
  const enrollmentHandler = (event) => {
    setEnrollment(event.currentTarget.value);
  };
  const graduationHandler = (event) => {
    setGraduation(event.currentTarget.value);
  };
  const majorCreditHandler = (event) => {
    setMajorCredit(event.currentTarget.value);
  };
  const completingMajorCreditHandler = (event) => {
    setCompletingMajorCredit(event.currentTarget.value);
  };
  const creditHandler = (event) => {
    setCredit(event.currentTarget.value);
  };
  const maxCreditHandler = (event) => {
    setMaxCredit(event.currentTarget.value);
  };
  const completingCreditHandler = (event) => {
    setCompletingCredit(event.currentTarget.value);
  };
  const memoHandler = (event) => {
    setMemo(event.currentTarget.value);
  };

  //인적사항
  let [School, setSchool] = useState("");
  let [Major, setMajor] = useState("");
  let [Degree, setDegree] = useState("");
  let [Enrollment, setEnrollment] = useState("");
  let [Graduation, setGraduation] = useState("");
  let [MajorCredit, setMajorCredit] = useState("");
  let [CompletingMajorCredit, setCompletingMajorCredit] = useState("");
  let [Credit, setCredit] = useState("");
  let [MaxCredit, setMaxCredit] = useState("");
  let [CompletingCredit, setCompletingCredit] = useState("");
  let [Type, setType] = useState([]);
  let [MyInfo, setMyInfo] = useState([]);
  //취득 자격증
  let [Date, setDate] = useState("");
  let [Name, setName] = useState("");
  let [Info, setInfo] = useState("");
  let [Content, setContent] = useState([]);
  //수상 경력
  let [Date2, setDate2] = useState("");
  let [Name2, setName2] = useState("");
  let [Org, setOrg] = useState("");
  let [Grade, setGrade] = useState("");
  let [Info2, setInfo2] = useState("");
  let [Content2, setContent2] = useState([]);
  //어학 성적
  let [Date3, setDate3] = useState("");
  let [Name3, setName3] = useState("");
  let [Info3, setInfo3] = useState("");
  let [Content3, setContent3] = useState([]);
  //메모
  let [Memo, setMemo] = useState("");

  // 인적사항
  const updateMyinfo = () => {
    setSchool(School);
    setMajor(Major);
    setDegree(Degree);
    setEnrollment(Enrollment);
    setGraduation(Graduation);
    setMajorCredit(MajorCredit);
    setCompletingMajorCredit(CompletingMajorCredit);
    setCredit(Credit);
    setMaxCredit(MaxCredit);
    setCompletingCredit(CompletingCredit);

    setMyInfo([
      School,
      Major,
      Degree,
      Enrollment,
      Graduation,
      MajorCredit,
      CompletingMajorCredit,
      Credit,
      MaxCredit,
      CompletingCredit,
    ]);
    setType([
      "학교명",
      "전공",
      "학위",
      "입학일",
      "졸업일",
      "전공학점",
      "전공이수학점",
      "학점",
      "최대학점",
      "이수학점",
    ]);

    setSchool("");
    setMajor("");
    setDegree("");
    setEnrollment("");
    setGraduation("");
    setMajorCredit("");
    setCompletingMajorCredit("");
    setCredit("");
    setMaxCredit("");
    setCompletingCredit("");
  };

  // 취득 자격증
  const updateLicense = () => {
    setDate([...Date, Date]);
    setName([...Name, Name]);
    setInfo([...Info, Info]);

    const con = { date: Date, name: Name, info: Info };
    setContent([...Content, con]);

    setDate("");
    setName("");
    setInfo("");
  };

  // 수상 경력
  const updateAward = () => {
    setDate2([...Date2, Date2]);
    setName2([...Name2, Name2]);
    setOrg([...Org, Org]);
    setGrade([...Grade, Grade]);
    setInfo2([...Info2, Info2]);

    const con2 = {
      date2: Date2,
      name2: Name2,
      org: Org,
      grade: Grade,
      info2: Info2,
    };
    setContent2([...Content2, con2]);

    setDate2("");
    setName2("");
    setOrg("");
    setGrade("");
    setInfo2("");
  };

  //어학 성적
  const updateLen = () => {
    setDate3([...Date3, Date3]);
    setName3([...Name3, Name3]);
    setInfo3([...Info3, Info3]);

    const con3 = { date3: Date3, name3: Name3, info3: Info3 };
    setContent3([...Content3, con3]);

    setDate3("");
    setName3("");
    setInfo3("");
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "white" }}>
      <NavBar />
      {/* ---------------------------------------------------------------- */}
      <div className="left-nav">
        {/* info-title */}
        <div className="info-title">
          <h4>취득 자격증</h4>
        </div>
        {/* 전체카드 감싸는 div */}
        <div
          className="info-div"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div className="info-contents">
              {Content &&
                Content.map((contents, index) => (
                  <div className="infoCard">
                    <div className="info-myinfo-contents" key={index}>
                      {contents.date}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.name}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.info}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen1}
            onClose={onClose1}>
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
                    updateLicense();
                    onClose1();
                  }}
                  mr={3}>
                  Save
                </Button>
                <Button onClick={onClose1}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={onOpen1}
          style={{
            float: "right",
            marginTop: "10px",
            border: "1px solid gray",
            width: "5%",
            height: "30px",
          }}>
          추가
        </Button>
        {/* ------------------------------------------------------------------------------------ */}
        {/* info-title */}
        <div className="info-title">
          <h4>수상 경력</h4>
        </div>
        {/* 전체카드 감싸는 div */}
        <div
          className="info-div"
          style={{ overflow: "auto", whiteSpace: "nowrap", height: "28%" }}>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div className="info-contents">
              {Content2 &&
                Content2.map((contents, index) => (
                  <div className="infoCard">
                    <div className="info-myinfo-contents" key={index}>
                      {contents.date2}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.name2}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.org}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.grade}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.info2}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen2}
            onClose={onClose2}>
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
                  <FormLabel>시상기관</FormLabel>
                  <Input
                    placeholder="ex) 부경대"
                    value={Org}
                    onChange={orgHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>성적</FormLabel>
                  <Input
                    placeholder="ex) 최우수상"
                    value={Grade}
                    onChange={gradeHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>설명</FormLabel>
                  <Input
                    placeholder="ex) 아이디어 구상 및 발표"
                    value={Info2}
                    onChange={infoHandler2}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updateAward();
                    onClose2();
                  }}
                  mr={3}>
                  Save
                </Button>
                <Button onClick={onClose2}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={onOpen2}
          style={{
            float: "right",
            marginTop: "10px",
            border: "1px solid gray",
            width: "5%",
            height: "30px",
          }}>
          추가
        </Button>
        {/* ------------------------------------------------------------------------- */}
        <div className="info-title">
          <h4>어학 성적</h4>
        </div>
        <div
          className="info-div"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div className="info-contents">
              {Content3 &&
                Content3.map((contents, index) => (
                  <div className="infoCard">
                    <div className="info-myinfo-contents" key={index}>
                      {contents.date3}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.name3}
                    </div>
                    <div className="info-myinfo-contents" key={index}>
                      {contents.info3}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen4}
            onClose={onClose4}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>어학 성적 정보를 입력해주세요.</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>날짜</FormLabel>
                  <Input
                    ref={initialRef}
                    value={Date3}
                    placeholder="ex) 2022.10.1"
                    onChange={dateHandler3}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>시험명</FormLabel>
                  <Input
                    placeholder="ex) 아이디어톤"
                    value={Name3}
                    onChange={nameHandler3}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>등급</FormLabel>
                  <Input
                    placeholder="ex) 대상"
                    value={Info3}
                    onChange={infoHandler3}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updateLen();
                    onClose4();
                  }}
                  mr={3}>
                  Save
                </Button>
                <Button onClick={onClose4}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={onOpen4}
          style={{
            float: "right",
            marginTop: "10px",
            border: "1px solid gray",
            width: "5%",
            height: "30px",
          }}>
          추가
        </Button>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="right-nav">
        <div className="right-title">
          <h4>인적사항</h4>
        </div>
        <div className="my-info" style={{ overflow: "scroll" }}>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen3}
            kjy
            onClose={onClose3}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>인적사항을 입력해주세요.</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>학교명</FormLabel>
                  <Input
                    ref={initialRef}
                    value={School}
                    onChange={schoolHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>전공</FormLabel>
                  <Input value={Major} onChange={majorHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>학위</FormLabel>
                  <Input value={Degree} onChange={degreeHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>입학일</FormLabel>
                  <Input value={Enrollment} onChange={enrollmentHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>졸업일</FormLabel>
                  <Input value={Graduation} onChange={graduationHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>전공 학점</FormLabel>
                  <Input value={MajorCredit} onChange={majorCreditHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>전공 이수 학점</FormLabel>
                  <Input
                    value={CompletingMajorCredit}
                    onChange={completingMajorCreditHandler}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>학점</FormLabel>
                  <Input value={Credit} onChange={creditHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>최대 학점</FormLabel>
                  <Input value={MaxCredit} onChange={maxCreditHandler} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>이수 학점</FormLabel>
                  <Input
                    value={CompletingCredit}
                    onChange={completingCreditHandler}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    updateMyinfo();
                    onClose3();
                  }}
                  mr={3}>
                  Save
                </Button>
                <Button onClick={onClose3}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <div
            style={{
              display: "inline-block",
              width: "40%",
              height: "100%",
              marginRight: "10px",
            }}>
            {Type &&
              Type.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    padding: "5px",
                    borderBottom: "1px solid grey",
                  }}>
                  {Type[index]}
                </div>
              ))}
          </div>

          <div
            style={{
              display: "inline-block",
              width: "45%",
              height: "100%",
              marginRight: "10px",
            }}>
            {MyInfo &&
              MyInfo.map((contents, index) => (
                <div
                  key={index}
                  style={{
                    marginLeft: "5px",
                    borderBottom: "1px solid grey",
                    padding: "5px",
                  }}>
                  {MyInfo[index]}
                </div>
              ))}
          </div>
        </div>
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={onOpen3}
          style={{
            marginTop: "10px",
            border: "1px solid gray",
            width: "10%",
            height: "30px",
            float: "right",
          }}>
          추가
        </Button>

        <div className="right-title">
          <h4>메모장</h4>
        </div>
        <div className="memo">
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
            }}></textarea>
          <Button
            variant="outline"
            colorScheme="gray"
            onClick={() => {
              setMemo([Memo]);
              console.log([Memo]);
            }}
            style={{
              float: "right",
              border: "1px solid gray",
              width: "10%",
              height: "30px",
            }}>
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
