import React from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
// import List from "./List";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/account");
  };

  let [SubType, setSubType] = useState([
    "날짜",
    "자격증명",
    "상세정보",
    "대회명",
  ]);
  let [Results, setResults] = useState([
    "result1",
    "result2",
    "result3",
    "result4",
    "result5",
    "result6",
  ]);
  let [Contents, setContents] = useState([
    "content1",
    "content2",
    "content3",
    "content4",
    "content5",
    "content6",
  ]);

  return (
    <div>
      <NavBar />
      {/* <List /> */}
      <div className="left-nav">
        <div className="profile-img">
          <img src="img/profileImg.jpg" className="radius-img" />
        </div>
        <div className="my-info"></div>
        <button type="submit" onClick={() => {}} className="button">
          <p>수정</p>
        </button>
        <button
          type="button"
          onClick={() => {
            handleAccount();
          }}
          className="button"
        >
          <p>계정관리</p>
        </button>
      </div>

      <div className="right-nav">
        <div className="type">
          <h4>취득 자격증</h4>
        </div>
        <div className="type-content">
          <Content
            SubType={SubType[0]}
            Results={Results[0]}
            Contents={Contents[0]}
          />

          <Content
            SubType={SubType[1]}
            Results={Results[1]}
            Contents={Contents[1]}
          />

          <Content
            SubType={SubType[2]}
            Results={Results[2]}
            Contents={Contents[2]}
          />

          <button
            type="button"
            className="add"
            onClick={() => {
              const content1 = document.getElementById("content1").value;
              document.getElementById("result1").innerText = content1;
              const content2 = document.getElementById("content2").value;
              document.getElementById("result2").innerText = content2;
              const content3 = document.getElementById("content3").value;
              document.getElementById("result3").innerText = content3;
            }}
          >
            추가
          </button>
        </div>

        <div className="type">
          <h4>수상 경력</h4>
        </div>
        <div className="type-content">
          <Content
            SubType={SubType[0]}
            Results={Results[3]}
            Contents={Contents[3]}
          />

          <Content
            SubType={SubType[3]}
            Results={Results[4]}
            Contents={Contents[4]}
          />

          <Content
            SubType={SubType[2]}
            Results={Results[5]}
            Contents={Contents[5]}
          />

          <button
            type="button"
            className="add"
            onClick={() => {
              const content4 = document.getElementById("content4").value;
              document.getElementById("result4").innerText = content4;
              const content5 = document.getElementById("content5").value;
              document.getElementById("result5").innerText = content5;
              const content6 = document.getElementById("content6").value;
              document.getElementById("result6").innerText = content6;
            }}
          >
            추가
          </button>
        </div>

        <div className="type">
          <h4>메모장</h4>
        </div>
        <div className="type-content"></div>
      </div>
    </div>
  );
}

function Content(props) {
  return (
    <div
      className="contents"
      style={{
        display: "inline-block",
        width: "30%",
        height: "100%",
        marginRight: "10px",
      }}
    >
      <h6 style={{ textAlign: "center", marginTop: "5px" }}>{props.SubType}</h6>
      <div id={props.Results}></div>
      <input id={props.Contents} style={{ width: "100%" }}></input>
    </div>
  );
}

export default Profile;
