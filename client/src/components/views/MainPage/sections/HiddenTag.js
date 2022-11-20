import React, { useState } from "react";

function HiddenTag() {
  const [Hidden, setHidden] = useState(false);

  const HiddenHandler = () => {
    setHidden(!Hidden);
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
      onClick={HiddenHandler}>
      숨기기
    </div>
  );
}

export default HiddenTag;
