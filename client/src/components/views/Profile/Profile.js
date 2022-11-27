import React from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
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
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import {
  folderClickIdState,
  MemoState,
  TokenState,
  UserIdState,
} from "../MainPage/Atom";
import Myinfo from "./Myinfo";
import axios from "axios";

function Profile() {
  const [userId, setuserId] = useRecoilState(UserIdState);
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
    setTitle(event.currentTarget.value);
  };
  const nameHandler3 = (event) => {
    setGrade1(event.currentTarget.value);
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
  // 카드 삭제 기능
  const deleteLicense = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await axios.delete(
          `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/licenses?id=${id}`,
          {
            headers: {
              Authorization: Token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
  };
  const deleteAwards = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await axios.delete(
          `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/awards?id=${id}`,
          {
            headers: {
              Authorization: Token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
  };
  const deleteLan = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await axios.delete(
          `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/language-skills?id=${id}`,
          {
            headers: {
              Authorization: Token,
            },
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    first();
  }, []);

  const first = async () => {
    try {
      const response = await axios.get(
        `http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile?userId=${userId}`,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
      console.log(response);
      setLicense(response.data.licenses);
      setAwards(response.data.awards);
      console.log(response.data.language_skills);
      setLanguageSkills(response.data.language_skills);
      setEducations(response.data.educations);
      setMemo(response.data.memo);
    } catch (e) {
      console.log(e);
    }
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
  let [Type, setType] = useState([
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
  let [Educations, setEducations] = useState([]);
  //취득 자격증
  let [Date, setDate] = useState("");
  let [Name, setName] = useState("");
  let [Info, setInfo] = useState("");
  let [License, setLicense] = useState([]);
  //수상 경력
  let [Date2, setDate2] = useState("");
  let [Name2, setName2] = useState("");
  let [Org, setOrg] = useState("");
  let [Grade, setGrade] = useState("");
  let [Info2, setInfo2] = useState("");
  let [Awards, setAwards] = useState([]);
  //어학 성적
  let [Title, setTitle] = useState("");
  let [Grade1, setGrade1] = useState("");
  let [LanguageSkills, setLanguageSkills] = useState([]);
  //메모
  let [Memo, setMemo] = useRecoilState(MemoState);
  // user token
  let [Token, setToken] = useRecoilState(TokenState);

  const updateMemo = () => {
    setMemo(Memo);

    update();
  };

  const update = async () => {
    console.log(Memo);
    const body = {
      description: Memo,
      id: 1,
    };

    try {
      await axios.put(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/memos",
        body,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  // 학력
  const updateEducation = async () => {
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

    setEducations([
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

    const body = {
      // 서버에서 요청하는 정보 이름으로 변환
      name: School,
      major: Major,
      degree: Degree,
      admissionDate: Enrollment,
      graduationDate: Graduation,
      majorGrade: MajorCredit,
      majorCourse: CompletingMajorCredit,
      grade: Credit,
      maxGrade: MaxCredit,
      course: CompletingCredit,
      user_id: 1,
    };

    try {
      await axios.post(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/educations",
        body,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }

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
  const updateLicense = async () => {
    setDate(Date);
    setName(Name);
    setInfo(Info);

    const con = { date: Date, title: Name, description: Info };
    setLicense([...License, con]);

    const body = {
      // 서버에서 요청하는 정보 이름으로 변환
      date: Date,
      title: Name,
      description: Info,
      user_id: userId,
    };
    // 2022-02-02
    console.log(body);

    try {
      await axios.post(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/licenses",
        body,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }

    setDate("");
    setName("");
    setInfo("");
  };

  // 수상 경력
  const updateAward = async () => {
    setDate2(Date2);
    setName2(Name2);
    setOrg(Org);
    setGrade(Grade);
    setInfo2(Info2);

    const con2 = {
      date: Date2,
      title: Name2,
      organization: Org,
      grade: Grade,
      description: Info2,
    };
    setAwards([...Awards, con2]);

    const body = {
      // 서버에서 요청하는 정보 이름으로 변환
      date: Date2,
      title: Name2,
      organization: Org,
      grade: Grade,
      description: Info2,
      user_id: 1,
    };
    console.log(body);

    try {
      await axios.post(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/awards",
        body,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }

    setDate2("");
    setName2("");
    setOrg("");
    setGrade("");
    setInfo2("");
  };

  //어학 성적
  const updateLen = async () => {
    setTitle(Title);
    setGrade1(Grade1);

    const con3 = { title: Title, grade: Grade1 };
    console.log(con3);
    console.log(LanguageSkills);
    setLanguageSkills([...LanguageSkills, con3]);

    const body = {
      // 서버에서 요청하는 정보 이름으로 변환
      title: Title,
      grade: Grade1,
      user_id: 1,
    };

    try {
      await axios.post(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/profile/language-skills",
        body,
        {
          headers: {
            Authorization: Token,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }

    setTitle("");
    setGrade1("");
  };

  return (
    <div style={{ width: "100%", height: "93vh", backgroundColor: "white" }}>
      <NavBar />
      {/* ---------------------------------------------------------------- */}
      <div className="left-nav">
        {/* info-title */}
        <div className="info-title" style={{ paddingTop: "2%" }}>
          <h4>취득 자격증</h4>
        </div>
        {/* 전체카드 감싸는 div */}
        <div
          className="info-div"
          style={{ overflow: "auto", whiteSpace: "nowrap" }}>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div className="info-contents">
              {License &&
                License.map((contents, index) => (
                  <div className="infoCard" key={index}>
                    <button
                      onClick={() => deleteLicense(contents.id)}
                      style={{
                        display: "inline-block",
                        float: "right",
                        border: "0",
                        width: "35px",
                        borderRadius: "100%",
                        height: "1px",
                      }}>
                      x
                    </button>
                    <div className="info-myinfo-contents">{contents.date}</div>
                    <div className="info-myinfo-contents">{contents.title}</div>
                    <div className="info-myinfo-contents">
                      {contents.description}
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
                  disabled={Date === "" || Name === "" || Info === ""}
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
        <div style={{ marginBottom: "2%" }}>
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
        </div>
        {/* ------------------------------------------------------------------------------------ */}
        {/* info-title */}
        <div className="info-title">
          <h4>수상 경력</h4>
        </div>
        {/* 전체카드 감싸는 div */}
        <div
          className="info-div"
          style={{ overflow: "auto", whiteSpace: "nowrap", minHeight: "28%" }}>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div className="info-contents">
              {Awards &&
                Awards.map((contents, index) => (
                  <div className="infoCard" key={index}>
                    {/* {console.log(contents.org)} */}
                    <button
                      onClick={() => deleteAwards(contents.id)}
                      style={{
                        display: "inline-block",
                        float: "right",
                        border: "0",
                        width: "35px",
                        borderRadius: "100%",
                        height: "1px",
                      }}>
                      x
                    </button>
                    <div className="info-myinfo-contents">{contents.date}</div>
                    <div className="info-myinfo-contents">{contents.title}</div>
                    <div className="info-myinfo-contents">
                      {contents.organization}
                    </div>
                    <div className="info-myinfo-contents">{contents.grade}</div>
                    <div className="info-myinfo-contents">
                      {contents.description}
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
                  disabled={
                    Date2 === "" ||
                    Name2 === "" ||
                    Org === "" ||
                    Info2 === "" ||
                    Grade === ""
                  }
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
        <div style={{ marginBottom: "2%" }}>
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
        </div>
        {/* ------------------------------------------------------------------------- */}
        <div className="info-title">
          <h4>어학 성적</h4>
        </div>
        <div
          className="info-div"
          style={{ overflow: "auto", whiteSpace: "nowrap", height: "13%" }}>
          {/* info-myinfo */}
          <div className="info-myinfo">
            <div className="info-contents">
              {LanguageSkills &&
                LanguageSkills.map((contents, index) => (
                  <div className="infoCard" key={index}>
                    <button
                      onClick={() => deleteLan(contents.id)}
                      style={{
                        display: "inline-block",
                        float: "right",
                        border: "0",
                        width: "35px",
                        borderRadius: "100%",
                        height: "1px",
                      }}>
                      x
                    </button>
                    <div className="info-myinfo-contents">{contents.title}</div>
                    <div className="info-myinfo-contents">{contents.grade}</div>
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
                  <FormLabel>시험명</FormLabel>
                  <Input
                    ref={initialRef}
                    value={Title}
                    placeholder="ex) 토익"
                    onChange={dateHandler3}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>점수</FormLabel>
                  <Input
                    placeholder="ex) 750 점"
                    value={Grade1}
                    onChange={nameHandler3}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  disabled={Title === "" || Grade1 === ""}
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
        <div className="my-info">
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen3}
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
                  disabled={
                    Major === "" ||
                    Degree === "" ||
                    Enrollment === "" ||
                    Graduation === "" ||
                    MajorCredit === "" ||
                    CompletingMajorCredit === "" ||
                    Credit === "" ||
                    MaxCredit === "" ||
                    CompletingCredit === ""
                  }
                  colorScheme="blue"
                  onClick={() => {
                    updateEducation();
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
            {Educations &&
              Educations.map((contents, index) => (
                <div key={index}>
                  <div className="educationInfo">{Educations[index]}</div>
                </div>
              ))}
          </div>
        </div>
        <ArrowLeftIcon
          w={4}
          h={4}
          style={{ marginTop: "3.5%", marginLeft: "75%" }}
        />
        <ArrowRightIcon
          w={4}
          h={4}
          style={{ marginTop: "3.5%", marginLeft: "5%" }}
        />
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

        <div className="right-title" style={{ paddingTop: "8%" }}>
          <h4>메모장</h4>
        </div>
        <div className="memo">
          <textarea
            type="text"
            value={Memo}
            onChange={memoHandler}
            style={{
              backgroundColor: "white",
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
              updateMemo();
            }}
            style={{
              marginTop: "10px",
              border: "1px solid gray",
              width: "10%",
              height: "30px",
              float: "right",
            }}>
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
