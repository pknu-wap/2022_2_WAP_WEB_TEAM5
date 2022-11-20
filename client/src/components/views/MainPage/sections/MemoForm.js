import React, { useState } from "react";

function MemoForm() {
  const [Memo, setMemo] = useState("");

  const MemoHandler = (event) => {
    setMemo(event.currentTarget.value);
  };

  return (
    <input
      value={Memo}
      onChange={MemoHandler}
      placeholder="메모할 내용을 입력하세요"
      style={{
        width: "90%",
        borderBottom: "1px solid #d9d9d9",
        borderTop: "1px solid #d9d9d9",
        borderRadius: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        justifyContent: "center",
        maxHeight: "100%",
        color: "black",
        fontWeight: "normal",
        fontSize: "13px",
      }}></input>
  );
}

export default MemoForm;
