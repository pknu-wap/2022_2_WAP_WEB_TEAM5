import React from "react";

export default function Count(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        marginBottom: "10px",
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
          marginRight: "130px",
        }}
      >
        <div // 공백 포함
          style={{
            color: "black",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            borderTopColor: "white",
            width: "300px",
            height: "40px",
            fontWeight: "bold",
            paddingTop: "10px",
          }}
        >
          공백 포함
        </div>
        <div
          // value=
          style={{
            textAlign: "left",
            width: "300px",
            height: "50px",
            // fontWeight: "bold",
            fontSize: "30px",
            border: "none",
            outline: "0",
          }}
          readOnly
        >{`${props.calc(props.Text, 1)} / ${props.byteCounter(
          props.Text,
          1
        )} byte`}</div>
      </div>
      <div // 공백 미포함과 바이트 묶는 div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
          marginRight: "80px",
        }}
      >
        <div // 공백 포함
          style={{
            color: "black",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            borderTopColor: "white",
            width: "230px",
            height: "40px",
            fontWeight: "bold",
            paddingTop: "10px",
          }}
        >
          공백 미포함
        </div>
        <div
          // value=
          style={{
            textAlign: "left",
            width: "230px",
            height: "50px",
            // fontWeight: "bold",
            fontSize: "30px",
            border: "none",
            outline: "0",
          }}
          readOnly
        >
          {`${props.calc(props.Text, 0)} / ${props.byteCounter(
            props.Text,
            0
          )} byte`}
        </div>
      </div>
    </div>
  );
}
