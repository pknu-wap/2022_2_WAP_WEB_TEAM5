import React from "react";

import NavBar from "../NavBar/NavBar";
import "./MainPage.css";
import Count from "./sections/Count";
import Question from "./sections/Question";
// 사전 기능 ,

function MainPage() {
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
      <div class="row" id="row01">
        <div // 폴더 칸
          class="col-sm-1"
          style={{
            backgroundColor: "#212226",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div // 폴더의 동그라미
            class="rounded-circle"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              marginTop: "40px",
              justifyContent: "center",
            }}
          ></div>
          <div // 폴더의 동그라미
            class="rounded-circle"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              marginTop: "20px",
            }}
          ></div>
          <div // 폴더의 동그라미
            class="rounded-circle"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              marginTop: "20px",
            }}
          ></div>
        </div>
        <div
          class="col-sm-2"
          style={{ backgroundColor: "#303136", height: "100vh" }}
        >
          <div
            style={{
              height: "80px",
              color: "white",
              // backgroundColor: "#424651",
              width: "100%",
              fontWeight: "bold",
              fontSize: "25px",
              borderBottomStyle: "solid",
              borderBottomWidth: "1px",
              borderBottomColor: "black",
              lineHeight: "95px",
            }}
          >
            네이버
          </div>
          <Question />
          <Count />
        </div>
        <div
          class="col-sm-9"
          style={{ backgroundColor: "#d9d9d9", height: "100vh" }}
        >
          <div
            style={{
              // 흰색 블록
              backgroundColor: "white",
              marginTop: "50px",
              marginLeft: "30px",
              width: "95%",
              height: "83%",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "93%",
                height: "7%",
                border: "solid 2px #d9d9d9",
                marginTop: "40px",
                borderRadius: "5px",
                display: "flex",
                // paddingTop: "10px", // 글자가 움직이네
              }}
            >
              <input
                type="text"
                style={{
                  width: "95%",
                  height: "99%",
                  border: "none",
                  marginLeft: "5px",
                }}
              ></input>
              <button
                class="btn btn-outline-secondary"
                style={{
                  // width: "30px",
                  width: "3%",
                  height: "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "13px",
                  marginLeft: "10px",
                }}
              >
                🔒
              </button>
            </div>
            <div
              style={{
                borderRadius: "5px",
                width: "93%",
                height: "78%",
                border: "solid 2px #d9d9d9",
                marginTop: "20px",
                display: "flex",
              }}
            >
              <textarea
                type="text"
                style={{
                  width: "95%",
                  height: "99%",
                  border: "none",
                  marginLeft: "5px",
                  marginTop: "5px",
                  resize: "none",
                }}
              ></textarea>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "100%", height: "93%" }}></div>
                <button
                  class="btn btn-outline-secondary"
                  style={{
                    // width: "30px",
                    width: "75%",
                    height: "5%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  🔒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
