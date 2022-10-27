import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import Count from "./Count";

function Form(props) {
  const [Title, setTitle] = useState("");
  const [Text, setText] = useState("");

  const titleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const textHandler = (event) => {
    setText(event.currentTarget.value);
  };

  const buttonHandler = () => {
    let body = {
      newTitle: Title,
      newText: Text,
    };

    props.refreshFunction(body);
  };

  useEffect(() => {
    console.log(props.Content);
  }, [props.Content]);

  return (
    <Fragment>
      <div
        style={{
          // 흰색 블록
          backgroundColor: "white",
          marginTop: "50px",
          marginLeft: "30px",
          width: "95%",
          height: "83%",
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
              width: "95%",
              height: "99%",
              border: "none",
              marginLeft: "5px",
              outline: "0",
            }}
            value={Title}
            onChange={titleHandler}
            placeholder="제목을 입력해주세요"
          ></input>

          <Button // 제목 버튼
            colorScheme="teal"
            variant="ghost"
            style={{
              // width: "30px",
              width: "3%",
              height: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "13px",
              marginLeft: "10px",
            }}
            // onClick={buttonHandler}
          >
            🔒
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
                height: "95%",
                border: "none",
                marginLeft: "5px",
                marginTop: "5px",
                resize: "none",
                outline: "0",
              }}
              placeholder="내용을 입력해주세요"
              value={Text}
              onChange={textHandler}
            ></textarea>
            <Button // 내용 버튼
              colorScheme="facebook"
              variant="ghost"
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
              }}
              onClick={buttonHandler}
            >
              🔒
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              marginBottom: "20px",
            }}
          >
            <div // 공백 포함과 바이트 묶는 div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "100px",
              }}
            >
              <div // 공백 포함
                style={{
                  color: "black",
                  borderTopStyle: "solid",
                  borderTopWidth: "1px",
                  borderTopColor: "white",
                  width: "150px",
                  height: "50px",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                공백 포함
              </div>
              <div // byte
                className="byte"
                style={{
                  color: "black",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderBottomColor: "white",
                  width: "150px",
                  height: "50px",
                }}
              >
                0 / 0 byte
              </div>
            </div>
            <div // 공백 미포함과 바이트 묶는 div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                width: "150px",
                height: "100px",
              }}
            >
              <div // 공백 미포함
                style={{
                  color: "black",
                  width: "100px",
                  height: "50px",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                공백 미포함
              </div>
              <div // byte
                className="byte"
                style={{
                  color: "black",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  borderBottomColor: "white",
                  width: "100px",
                  height: "50px",
                }}
              >
                0 / 0 byte
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Form;
