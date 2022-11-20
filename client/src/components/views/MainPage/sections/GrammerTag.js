import React from "react";

function GrammerTag({ Grammer, setGrammer, Memo, setMemo }) {
  const grammerHandler = () => {
    setGrammer(!Grammer);
    Memo && setMemo(!Memo);
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
      onClick={grammerHandler}>
      맞춤법검사
    </div>
  );
}

export default GrammerTag;
