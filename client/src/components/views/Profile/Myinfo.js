import React, { useState } from "react";

function Myinfo({ contents }) {
  return (
    <div className="infoCard">
      <div className="info-myinfo-contents">{contents.date}</div>
      <div className="info-myinfo-contents">{contents.title}</div>
      <div className="info-myinfo-contents">{contents.description}</div>
    </div>
  );
}

export default Myinfo;
