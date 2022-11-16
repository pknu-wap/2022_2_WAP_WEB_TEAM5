import React, { Fragment, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Button } from "@chakra-ui/react";
import Count from "./Count";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  CoverState,
  fileClickIdState,
  folderClickIdState,
  CompanyListState,
  FormState,
} from "../Atom";

function Form(props) {
  // 맞춤법 검사가 꺼져있음
  const [Title, setTitle] = useState("");
  let [Text, setText] = useState("");
  const [Grammer, setGrammer] = useState(false);
  const [questionLock, setquestionLock] = useState(false);
  const [descriptionLock, setdescriptionLock] = useState(false);
  const [Cover, setCover] = useRecoilState(CoverState);
  const [fileClickId, setfileClickId] = useRecoilState(fileClickIdState);
  const [folderClickId, setfolderClickId] = useRecoilState(folderClickIdState);
  const [CompanyList, setCompanyList] = useRecoilState(CompanyListState);
  const [Form, setForm] = useRecoilState(FormState);

  useEffect(() => {
    if (Cover[0]) {
      // Cover가 하나라도 존재하는 상태에서
      const cov = Cover.filter((cover) => cover.id === fileClickId);
      // Question 파일에서 클릭한 아이디와 현재 cover에 있는 id가 동일한 것을 cov에 담음

      if (cov[0].question === null || cov[0].question === undefined) {
        // cov에 담겨있는 것 중 질문이 null이거나 undefined면 Title을 공백으로 설정
        setTitle("");
      } else {
        setTitle(cov[0].question);
        // 아니라면, 질문에 있는 값을 출력
      }

      if (cov[0].description === null || cov[0].description === undefined) {
        // cov에 담겨있는 것중 description이 null이거나 undefined면 공백으로 설정
        setText("");
      } else {
        setText(cov[0].description);
        // 아니라면, description에 있는 값을 출력
      }
      // FormUpdate();

      // setquestionLock(cov[0].question_lock); // 잠금 유무 정보도 받아옴
      // setdescriptionLock(cov[0].description_lock);
    }
  }, [fileClickId]); // 클릭한 파일의 아이디가 바뀔 때마다 실행

  const titleHandler = (event) => {
    setTitle(event.currentTarget.value);
    if (Title.length > 200) {
      alert("200자 이상입니다.");
      setTitle(Title.substring(0, 200));
    }
  };

  useEffect(() => {
    if (props.grammer === "yes") {
      setGrammer(true);
    }
  }, [props.grammer]);

  const textHandler = (event) => {
    setText(event.currentTarget.value);

    // console.log(event.currentTarget.value.length);
    if (Text.length > 5000) {
      alert("5000자 이상입니다.");
      setText(Text.substring(0, 5000));
    }
  };

  const titlebuttonHandler = async () => {
    if (questionLock === false) {
      const body = {
        id: fileClickId,
        question: Title,
      };
      // setTitle(Title);
      try {
        await axios.put(
          "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/cover-letters",
          body
        );
        await FormUpdate();
      } catch (e) {
        console.log(e);
      }
    }
    setquestionLock(!questionLock);
    // 질문 자물쇠
  };

  const textbuttonHandler = async () => {
    // setText(Text);
    if (descriptionLock === false) {
      const body = {
        id: fileClickId,
        description: Text,
      };

      try {
        await axios.put(
          "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/cover-letters",
          body
        );
        await FormUpdate();
      } catch (e) {
        console.log(e);
      }
    }

    setdescriptionLock(!descriptionLock);
    // 내용 자물쇠
  };

  const FormUpdate = async () => {
    // console.log(Cover);
    const response = await axios.get(
      "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
    );
    setCompanyList(response.data.list);
    const fileList = await response.data.list.filter(
      (company) =>
        company.list_id ===
        (folderClickId === 0 ? CompanyList[0].list_id : folderClickId)
      // 제일 첫 화면일 때는 0번째 리스트의 id를 반환
    );

    if (fileList[0]) {
      const co = fileList[0].cover_letter;
      setCover(fileList[0].cover_letter);

      const FormList = co.filter(
        (form) => form.id === (fileClickId === 0 ? co[0].id : fileClickId)
      );

      if (FormList[0]) {
        setTitle(FormList[0].question);
        setText(FormList[0].description);
      }
    }
  };

  const calc = (text, blank = 0) => {
    let word = 0;

    if (blank === 0) {
      text = text.replace(/\s+/g, "");
    }

    if (text !== 0) {
      word = text.length;
    }
    return word;
  };

  const byteCounter = (text, blank = 0) => {
    let byte = 0;

    if (blank === 0) {
      text = text.replace(/\s+/g, "");
    }

    if (text !== 0) {
      for (let i = 0; i < text.length; i++) {
        if (/[ㄱ-ㅎㅏ-ㅣ가-힣一-龥ぁ-ゔァ-ヴー々〆〤]/.test(text[i])) {
          byte = byte + 2;
        } else {
          byte++;
        }
      }
    }

    return byte;
  };

  return (
    <Fragment>
      {Grammer ? (
        // 맞춤법 검사가 열려있으면?
        <div
          style={{
            // 흰색 블록
            backgroundColor: "white",
            marginTop: "30px",
            marginLeft: "25px",
            width: "70%",
            height: "90%",
            //   borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}>
          <div // 제목
            style={{
              width: "93%",
              height: "7%",
              border: "solid 2px #d9d9d9",
              marginTop: "40px",
              borderRadius: "5px",
              display: "flex",
              // paddingTop: "10px", // 글자가 움직이네
            }}>
            <input // 제목 input
              type="text"
              style={{
                marginLeft: "10px",
                width: "95%",
                height: "99%",
                border: "none",
                outline: "0",
              }}
              value={Title}
              onChange={titleHandler}
              placeholder="제목을 입력해주세요"
              readOnly={questionLock ? true : false}></input>
            <Button // 제목 버튼
              colorScheme="gray"
              variant="ghost"
              style={{
                width: "40px",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1px",
                marginLeft: "10px",
                border: "none",
                outline: "0",
              }}
              onClick={titlebuttonHandler}>
              {questionLock ? <LockIcon /> : <UnlockIcon />}

              {/* 제목 버튼 안에 자물쇠 아이콘 */}
            </Button>
          </div>
          <div // 내용 시작
            style={{
              borderRadius: "5px",
              width: "93%",
              height: "80%",
              border: "solid 2px #d9d9d9",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}>
            <div style={{ display: "flex", width: "100%", height: "100%" }}>
              <textarea // 내용 입력 칸
                type="text"
                style={{
                  width: "95%",
                  height: "97%",
                  border: "none",
                  marginLeft: "10px",
                  marginTop: "10px",
                  resize: "none",
                  outline: "0",
                }}
                placeholder="내용을 입력해주세요"
                value={Text}
                onChange={textHandler}></textarea>
              <Button // 내용 버튼
                colorScheme="gray"
                variant="ghost"
                style={{
                  width: "40px",
                  height: "40px",
                  marginTop: "1px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                  border: "none",
                  outline: "0",
                }}
                onClick={textbuttonHandler}>
                {descriptionLock ? <LockIcon /> : <UnlockIcon />}
                {/* 내용 버튼안의 자물쇠 아이콘 */}
              </Button>
            </div>
            <Count calc={calc} Text={Text} byteCounter={byteCounter} />
            {/* 글자수를 세주는 폼 */}
          </div>
        </div>
      ) : (
        <div
          style={{
            // 흰색 블록
            backgroundColor: "white",
            marginTop: "30px",
            marginLeft: "25px",
            width: "95%",
            height: "90%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div // 제목
            style={{
              width: "93%",
              height: "7%",
              border: "solid 2px #d9d9d9",
              marginTop: "40px",
              borderRadius: "5px",
              display: "flex",
            }}>
            <input // 제목 input
              type="text"
              style={{
                marginLeft: "10px",
                width: "95%",
                height: "99%",
                border: "none",
                outline: "0",
              }}
              value={Title}
              onChange={titleHandler}
              placeholder="제목을 입력해주세요"
              readOnly={questionLock ? true : false}></input>

            <Button // 제목 버튼
              colorScheme="gray"
              variant="ghost"
              style={{
                width: "40px",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1px",
                marginLeft: "10px",
                border: "none",
                outline: "0",
              }}
              onClick={titlebuttonHandler}>
              {questionLock ? <LockIcon /> : <UnlockIcon />}
              {/* 자물쇠 */}
            </Button>
          </div>

          <div // 내용 시작
            style={{
              borderRadius: "5px",
              width: "93%",
              height: "80%",
              border: "solid 2px #d9d9d9",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
            }}>
            <div style={{ display: "flex", width: "100%", height: "100%" }}>
              {/* 내용 입력칸과 버튼을 묶는 div */}
              <textarea // 내용 입력 칸
                type="text"
                style={{
                  width: "95%",
                  height: "97%",
                  border: "none",
                  marginLeft: "10px",
                  marginTop: "10px",
                  resize: "none",
                  outline: "0",
                }}
                placeholder="내용을 입력해주세요"
                value={Text}
                onChange={textHandler}
                readOnly={descriptionLock ? true : false}>
                {/* Lock이 걸려있으면 수정 불가 */}
              </textarea>
              <Button // 내용 버튼
                colorScheme="gray"
                variant="ghost"
                style={{
                  width: "40px",
                  height: "40px",
                  marginTop: "1px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                  border: "none",
                  outline: "0",
                }}
                onClick={textbuttonHandler}>
                {descriptionLock ? <LockIcon /> : <UnlockIcon />}
              </Button>
            </div>
            <Count calc={calc} Text={Text} byteCounter={byteCounter} />
            {/* 글자수 세주는 폼 */}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Form;
