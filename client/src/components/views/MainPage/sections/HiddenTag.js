import React from "react";

function HiddenTag(props) {
  const HiddenHandler = () => {
    props.refreshfunction(props.ListToggle);
  };

  return (
    <div
      style={{
        backgroundColor: "#303136",
        color: "white",
        height: "min-content",
        width: "25%",
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
