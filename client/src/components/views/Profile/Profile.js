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
  const infoHandler2 = (event) => {
    setInfo2(event.currentTarget.value);
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
  let [Info2, setInfo2] = useState("");
  let [Content2, setContent2] = useState([]);
  //메모
  let [Memo, setMemo] = useState("");

  // 인적사항
  const updateMyinfo = () => {
    setSchool([...School, School]);
    setMajor([...Major, Major]);
    setDegree([...Degree, Degree]);
    setEnrollment([...Enrollment, Enrollment]);
    setGraduation([...Graduation, Graduation]);
    setMajorCredit([...MajorCredit, MajorCredit]);
    setCompletingMajorCredit([...CompletingMajorCredit, CompletingMajorCredit]);
    setCredit([...Credit, Credit]);
    setMaxCredit([...MaxCredit, MaxCredit]);
    setCompletingCredit([...CompletingCredit, CompletingCredit]);

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
    setInfo2([...Info2, Info2]);

    const con2 = { date2: Date2, name2: Name2, info2: Info2 };
    setContent2([...Content2, con2]);

    setDate2("");
    setName2("");
    setInfo2("");
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#eceff1" }}>
      <NavBar />
      {/* ---------------------------------------------------------------- */}
      <div className="left-nav">
        {/* info-title */}
        <div className="info-title">
          <h4>취득 자격증</h4>
        </div>
        {/* info-div */}
        <div
          className="info-div"
          style={{ overflow: "scroll", maxWidth: "100%" }}>
          <div className="info-type-myinfo">
            {/* info-type */}
            <div className="info-type">
              <h6 className="info-type-contents">날짜</h6>
              <h6 className="info-type-contents">자격증명</h6>
              <h6 className="info-type-contents">상세정보</h6>
            </div>

            {/* info-myinfo */}
            <div className="info-myinfo">
              <div className="info-contents">
                {Content &&
                  Content.map((contents, index) => (
                    <div className="asdf">
                      <div className="info-myinfo-contents" key={index}>
                        {contents.date}
                      </div>
                      <div className="info-myinfo-contents" key={index}>
                        {contents.name}
                      </div>
                      <div className="info-myinfo-contents" key={index}>
                        {contents.info}
                      </div>
                      {/* dfkjaslfkasjdkl */}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            colorScheme="gray"
            onClick={onOpen1}
            style={{
              width: "5%",
              height: "30px",
            }}>
            추가
          </Button>
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

        {/* info-title */}
        <div className="info-title">
          <h4>수상 경력</h4>
        </div>
        {/* info-div */}
        <div
          className="info-div"
          style={{ overflow: "scroll", maxWidth: "100%" }}>
          {/* info-type */}
          <div className="info-type">
            <h6 className="info-type-contents">날짜</h6>
            <h6 className="info-type-contents">대회명</h6>
            <h6 className="info-type-contents">상세정보</h6>
          </div>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div>
              {Content2 &&
                Content2.map((contents, index) => (
                  <div className="info-myinfo-contents" key={index}>
                    {contents.date2}
                  </div>
                ))}
            </div>
            <div>
              {Content2 &&
                Content2.map((contents, index) => (
                  <div className="info-myinfo-contents" key={index}>
                    {contents.name2}
                  </div>
                ))}
            </div>
            <div>
              {Content2 &&
                Content2.map((contents, index) => (
                  <div className="info-myinfo-contents" key={index}>
                    {contents.info2}
                  </div>
                ))}
            </div>
          </div>

          <Button
            variant="outline"
            colorScheme="gray"
            onClick={onOpen2}
            style={{
              width: "5%",
              height: "30px",
            }}>
            추가
          </Button>
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
                  <FormLabel>상세정보</FormLabel>
                  <Input
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

        <div className="info-title">
          <h4>어학 성적</h4>
        </div>
        <div
          className="info-div"
          style={{ overflow: "scroll", maxWidth: "100%" }}></div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="right-nav">
        <div className="right-title">
          <h4>인적사항</h4>
        </div>
        <div
          className="my-info"
          style={{ overflow: "scroll", maxWidth: "100%" }}>
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
              }}>
              인적사항 종류
            </h6>
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
              }}>
              내 정보
            </h6>
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

          <Button
            variant="outline"
            colorScheme="gray"
            onClick={onOpen3}
            style={{
              width: "8%",
              height: "30px",
            }}>
            추가
          </Button>
        </div>

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
            style={{ float: "right", height: "30px", width: "5%" }}>
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
