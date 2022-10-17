import React from "react";

function Add() {
  return (
    <div>
      <div
        class="rounded" // border
        style={{
          width: "250px",
          height: "50px",
          backgroundColor: "white",
          margin: "30px auto 20px",
          // borderRadius: "20%",
          display: "flex",
          justifyContent: "space-evenly",
          boxShadow: "0px 2px 3px 0px #d9d9d9",
          border: "2px solid #d9d9d9",
        }}
      >
        <button
          class="btn btn-secondary"
          style={{
            border: "2px solid #d9d9d9",
            width: "104px",
            height: "35px",
            borderRadius: "30%",
            marginTop: "7px",
            // backgroundColor: "#d9d9d9",
            boxShadow: "0px 0px 3px 0px #d9d9d9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            // color: "black",
          }}
        >
          맞춤법 검사
        </button>
        <button
          class="btn btn-secondary"
          style={{
            width: "104px",
            height: "35px",
            border: "2px solid #d9d9d9",
            marginTop: "7px",
            borderRadius: "30%",
            boxShadow: "0px 0px 3px 0px #d9d9d9",
            // backgroundColor: "#d9d9d9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            // color: "black",
          }}
        >
          파일 내보내기
        </button>
      </div>
    </div>
  );
}

export default Add;
