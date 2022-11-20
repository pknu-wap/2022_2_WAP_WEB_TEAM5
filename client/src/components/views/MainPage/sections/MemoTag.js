import React from "react";

function MemoTag({ Memo, setMemo, Grammer, setGrammer }) {
  const memoHandler = () => {
    setMemo(!Memo);
    Grammer && setGrammer(!Grammer);
  };

  return (
    <div
      style={{
        backgroundColor: "#303136",
        color: "white",
        height: "min-content",
        width: "1.5%",
        marginTop: "50px",
        overflow: "hidden",
        fontSize: "13px",
        cursor: "pointer",
        padding: "0.1%",
        textAlign: "center",
      }}
      onClick={memoHandler}>
      메모장
    </div>
  );
}

export default MemoTag;
