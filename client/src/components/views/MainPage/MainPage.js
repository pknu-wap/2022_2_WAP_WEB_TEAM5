import React, { useState, useRef } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import NavBar from "../NavBar/NavBar";
import "./MainPage.css";

import Question from "./sections/Question";
import Folder from "./sections/Folder";
import Form from "./sections/Form";
// 사전 기능 ,

function MainPage() {
  const [Content, setContent] = useState([]);
  const nextId = useRef(0);

  const updateTitle = (body) => {
    const content = {
      id: nextId.current,
      title: body.newTitle,
      text: body.newText,
    };
    setContent(content);
    nextId.current++;
  };

  return (
    <div>
      <NavBar />
      <Grid templateColumns="repeat(20, 1fr)">
        <GridItem // 폴더 칸
          colSpan={1}
          style={{
            backgroundColor: "#212226",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Folder />
        </GridItem>
        <GridItem
          colSpan={3}
          height="10px"
          style={{ backgroundColor: "#303136", height: "100vh" }}
        >
          <Question />
        </GridItem>
        <GridItem
          colSpan={16}
          height="10px"
          style={{ backgroundColor: "#d9d9d9", height: "100vh" }}
        >
          <Form refreshFunction={updateTitle} Content={Content} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default MainPage;
