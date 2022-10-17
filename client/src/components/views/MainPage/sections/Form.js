import React, { useEffect, useState } from "react";

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
    <div>
      <div
        className="form"
        style={{
          width: "550px",
          height: "580px",
          backgroundColor: "white",
          border: "5px solid #d9d9d9",
          boxShadow: "0px 0px 3px 0px #d9d9d9",
        }}
      >
        <div
          className="rounded"
          style={{
            margin: "10px auto 10px", // 위 왼/오 아래
            // width: "510px",
            width: "95%",
            height: "40px",
            border: "3px solid #d9d9d9",
            display: "flex",
          }}
        >
          <input
            type="text"
            style={{
              // width: "470px",
              width: "93%",
              height: "33px",
              border: "none",
            }}
            // value="네이버 자소서"
            value={Title}
            onChange={titleHandler}
            placeholder="제목을 입력해주세요"
          ></input>

          <button
            class="btn btn-outline-secondary"
            style={{
              // width: "30px",
              width: "6%",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2px",
            }}
          >
            🔒
          </button>
        </div>
        <div
          className="rounded"
          style={{
            margin: "5px auto",
            width: "95%",
            height: "330px",
            border: "3px solid #d9d9d9",
            display: "flex",
          }}
        >
          <textarea
            type="text"
            // value="내용을 작성해주세요"
            value={Text}
            onChange={textHandler}
            style={{
              width: "93%",
              // height: "320px",
              height: "100%",
              border: "none",
            }}
          ></textarea>
          <button
            class="btn btn-outline-secondary"
            style={{
              // width: "30px",
              width: "6%",
              height: "30px",
              display: "flex",
              marginTop: "290px",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={buttonHandler}
          >
            🔒
          </button>
        </div>
        <div
          className="line"
          style={{
            border: "0",
            height: "0",
            borderTop: "1px solid #d9d9d9",
            borderBottom: "1px solid #d9d9d9",
            marginTop: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="rounded"
            style={{
              margin: "10px 0px 0px 17px",
              width: "200px",
              height: "130px",
              border: "2px solid #d9d9d9",
            }}
          >
            공백포함
          </div>
          <div
            className="rounded"
            style={{
              margin: "10px 0px 0px 17px",
              width: "200px",
              height: "130px",
              border: "2px solid #d9d9d9",
            }}
          >
            공백미포함
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
