import React from "react";
import { Button } from "@chakra-ui/react";

function Folder() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "80px",
          color: "white",
          // backgroundColor: "#424651",
          width: "100%",
          fontWeight: "bold",
          fontSize: "25px",
          borderBottom: "1px solid black",
          lineHeight: "95px",
          marginLeft: "25px",
          overflow: "hidden",
        }}
      >
        네이버
      </div>
      <Button
        colorScheme="whiteAlpha"
        variant="ghost"
        style={{
          height: "50px",
          color: "white",
          fontSize: "20px",
          textAlign: "left",
          width: "100%",
          marginTop: "10px",
          // paddingRight: "130px",
          overflow: "hidden",
          paddingRight: "130px",
        }}
      >
        네이버 1번 문항
      </Button>
      <Button
        colorScheme="whiteAlpha"
        variant="ghost"
        style={{
          height: "50px",
          color: "white",
          fontSize: "20px",
          // backgroundColor: "#424651",
          width: "100%",
          marginTop: "10px",
          overflow: "hidden",
          paddingRight: "130px",
        }}
      >
        네이버 2번 문항
      </Button>
      <Button
        colorScheme="whiteAlpha"
        variant="ghost"
        style={{
          textAlign: "left",
          height: "55px",
          color: "white",
          fontSize: "20px",
          width: "100%",
          marginTop: "10px",
          overflow: "hidden",
          paddingRight: "130px",
        }}
      >
        네이버 3번 문항
      </Button>
    </div>
  );
}

export default Folder;
