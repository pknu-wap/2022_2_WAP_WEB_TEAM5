import React, { useState } from "react";
import { DeleteIcon, EditIcon, CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function QuestionList({ content, setCover, Cover, fileOnClick, setfileId }) {
  const [Edit, setEdit] = useState(false);
  const [Text, setText] = useState(content.title);

  const deleteClick = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setCover(Cover.filter((content) => content.id !== id));
    }
  };

  const onChangeHandler = (event) => {
    setText(event.currentTarget.value);
  };

  const EditClick = () => {
    setEdit(true);
  };

  const CheckOnClick = (id) => {
    // console.log(Cover.id);
    const editCover = Cover.map((cover) => ({
      ...cover,
      title: cover.id === id ? Text : cover.title,
    }));
    setCover(editCover);
    setEdit(false);
  };

  const questionClick = (id) => {
    setfileId(id);
  };

  return (
    <div style={{ width: "100%" }}>
      {Edit ? (
        <div style={{ display: "flex", height: "50px" }}>
          <input
            value={Text}
            onChange={onChangeHandler}
            style={{
              paddingLeft: "25px",
              height: "50px",
              color: "white",
              backgroundColor: "#303136",
              fontSize: "15px",
              width: "90%",
              marginTop: "10px",
              overflow: "scroll",
              // float: "left",
              border: "none",
              outline: "0",
            }}></input>
          <CheckIcon
            style={{
              color: "white",
              height: "17px",
              width: "10%",
              marginTop: "10%",
              marginRight: "4%",
              cursor: "pointer",
            }}
            onClick={() => CheckOnClick(content.id)}
          />
        </div>
      ) : (
        <div style={{ display: "flex", width: "100%" }}>
          <Button
            colorScheme="whiteAlpha"
            variant="ghost"
            justifyContent="left"
            style={{
              paddingLeft: "25px",
              height: "50px",
              color: "white",
              fontSize: "15px",
              width: "80%",
              marginTop: "10px",
              overflow: "scroll",
              border: "none",
              outline: "0",
            }}
            onClick={() => questionClick(content.id)}>
            {content.title}
          </Button>
          <EditIcon
            style={{
              color: "white",
              height: "17px",
              width: "10%",
              marginTop: "9%",
              marginRight: "4%",
              cursor: "pointer",
            }}
            onClick={EditClick}
          />
          <DeleteIcon
            style={{
              color: "white",
              height: "17px",
              width: "10%",
              marginTop: "9%",
              marginRight: "4%",
              cursor: "pointer",
            }}
            onClick={() => deleteClick(content.id)}
          />
        </div>
      )}
    </div>
  );
}

export default QuestionList;
