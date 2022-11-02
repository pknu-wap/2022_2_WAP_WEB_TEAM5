import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Count from "./Count";
import { LockIcon } from "@chakra-ui/icons";
import axios from "axios";

function FormG(props) {
  // 맞춤법 검사가 꺼져있음
  const [Title, setTitle] = useState("");
  const [Text, setText] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
      )
      .then((response) => {
        setTitle(response.data.list[0].cover_letter[0].question);
        setText(response.data.list[0].cover_letter[0].description);
      });
  }, []);

  const titleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const textHandler = (event) => {
    setText(event.currentTarget.value);
  };

  const titlebuttonHandler = () => {
    setTitle(Title);
    console.log(Title);
  };

  const textbuttonHandler = () => {
    setText(Text);
    console.log(Text);
  };

  const saveHandler = () => {
    setText(Text);
    console.log(Text);
  };

  const calc = (text, blank = 0) => {
    let word = 0;

    if (blank === 0) {
      text = text.replace(/\s+/g, "");
    }

    if (text !== 0) {
      word = text.length;
    }
    // setWord(Text.length);
    // console.log(Text.length);
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
      <div
        style={{
          // 흰색 블록
          backgroundColor: "white",
          marginTop: "30px",
          marginLeft: "25px",
          width: "95%",
          height: "90%",
          //   borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div // 제목
          style={{
            width: "93%",
            height: "7%",
            border: "solid 2px #d9d9d9",
            marginTop: "40px",
            borderRadius: "5px",
            display: "flex",
            // paddingTop: "10px", // 글자가 움직이네
          }}
        >
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
          ></input>

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
            onClick={titlebuttonHandler}
          >
            <LockIcon />
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
          }}
        >
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
              onChange={textHandler}
            ></textarea>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                onClick={textbuttonHandler}
              >
                <LockIcon />
              </Button>
              <Button // 내용 버튼
                colorScheme="gray"
                variant="outline"
                style={{
                  width: "40px",
                  height: "40px",
                  marginTop: "1px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                  fontSize: "13px",
                  // border: "none",
                  // outline: "0",
                }}
                onClick={saveHandler}
              >
                저장
              </Button>
            </div>
          </div>
          <Count calc={calc} Text={Text} byteCounter={byteCounter} />
        </div>
      </div>
    </Fragment>
  );
}

export default FormG;
