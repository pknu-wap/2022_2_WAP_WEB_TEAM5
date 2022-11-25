import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { MemoState } from "../Atom";
import { Button } from "@chakra-ui/react";
function MemoForm() {
  const [Memo, setMemo] = useRecoilState(MemoState);

  const MemoHandler = (event) => {
    setMemo(event.currentTarget.value);
    console.log(Memo);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <textarea
        value={Memo}
        onChange={MemoHandler}
        placeholder="메모할 내용을 입력하세요"
        style={{
          width: "90%",
          borderBottom: "1px solid #d9d9d9",
          borderTop: "1px solid #d9d9d9",
          // border: "none",
          resize: "none",
          outline: "0",
          marginTop: "15px",
          marginBottom: "10px",
          // justifyContent: "center",
          // height: "520%",
          height: "85%",
          color: "black",
          fontWeight: "normal",
          overflow: "scroll",
        }}></textarea>

      <Button
        variant="outline"
        colorScheme="gray"
        onClick={() => {
          setMemo(Memo);
          console.log(Memo);
        }}
        style={{
          marginLeft: "85%",
          height: "30px",
          width: "5%",
          flow: "right",
        }}>
        저장
      </Button>
    </div>
  );
}

export default MemoForm;
