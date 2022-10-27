import React from "react";
import { AddIcon } from "@chakra-ui/icons";

function Folder() {
  return (
    <div>
      <div // 폴더의 동그라미
        className="rounded-circle"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "white",
          marginTop: "40px",
          justifyContent: "center",
        }}
      ></div>
      <div // 폴더의 동그라미
        className="rounded-circle"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "white",
          marginTop: "40px",
          justifyContent: "center",
        }}
      ></div>
      <div // 폴더의 동그라미
        className="rounded-circle"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "white",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddIcon />
      </div>
    </div>
  );
}

export default Folder;
