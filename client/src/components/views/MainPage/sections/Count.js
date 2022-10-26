import React from "react";
import "./Count.css";

export default function count() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        position: "absolute",
        bottom: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          width: "150px",
          height: "100px",
        }}
      >
        <div
          style={{
            color: "white",
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
        <div
          className="byte"
          style={{
            color: "white",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100px",
        }}
      >
        <div
          style={{
            color: "white",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            borderTopColor: "white",
            fontWeight: "bold",
            paddingTop: "10px",
            width: "150px",
            height: "50px",
          }}
        >
          공백 미포함
        </div>
        <div
          className="byte"
          style={{
            color: "white",
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
    </div>
  );
}
