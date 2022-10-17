import React, { useState, useRef } from "react";

import NavBar from "../NavBar/NavBar";
import "./MainPage.css";
import Folder from "./sections/Folder";
import Form from "./sections/Form";
import Add from "./sections/Add";

function MainPage() {
  // const [Push, setPush] = useState(false);
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
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      <NavBar />
      <div style={{ width: "100%", height: "100%" }}>
        <Add />
        <div
          className="main_form"
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "65px",
          }}
        >
          <Folder />
          <Form refreshFunction={updateTitle} Content={Content} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
