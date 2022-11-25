import React, { useState, useEffect } from "react";
import logo_img from "./lala1.png";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
// import axios from "axios";

function NavBar(props) {
  const navigate = useNavigate();
  const [Main, setMain] = useState(false);

  const handleAccount = () => {
    // 메뉴 탭에서 마이페이지를 눌렀을 때 실행
    navigate("/account");
  };

  const handleProfile = () => {
    // 메뉴 탭에서 계정관리를 눌렀을 때 실행
    navigate("/profile");
  };

  const navHandler = () => {
    // 로고를 클릭했을 때 메인으로 이동되게 해줌
    navigate("/main");
  };

  const logoutHandler = () => {
    // 로그아웃을 눌렀을 때 실행되는 코드
    alert("로그아웃 되셨습니다.");
    navigate("/")
  };

  useEffect(() => {
    if (props.loc === "main") {
      // 메인페이지일 경우에만 오른쪽에 메뉴 탭과 로그아웃 탭을 넣음
      // props로 loc을 받아와서 메인인지 아닌지 판별
      setMain(true);
    }
  }, [props.loc]);

  return (
    <div
      className="navbar navbar-light bg-light"
      style={{
        boxShadow: "0px 4px 4px -4px black",
        height: "64px",
        paddingLeft: "20px",
      }}>
      <img // 로고 이미지
        src={logo_img}
        onClick={navHandler}
        style={{ width: "100px", height: "40px", cursor: "pointer" }}
        alt=""
      />
      {!Main ? ( // 만약에 메인 페이지가 아닐 경우에는 그냥 빈 태그
        <div></div>
      ) : (
        <div // 메인 페이지일 경우에는 로그아웃 버튼과 메뉴 버튼을 띄움
          style={{
            display: "flex",
            alignItems: "center",
          }}>
          {props.Loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.700"
              size="xl"
              marginRight="20px"
            />
          ) : null}
          <button // 로그아웃 버튼
            style={{
              marginRight: "20px",
              width: "50px",
              // height: "40px",
              fontWeight: "bold",
            }}
            onClick={logoutHandler}>
            logout
          </button>
          <Menu>
            {/* 로그아웃 버튼을 클릭했을 때 메뉴 창이 열리는데, 그 메뉴창 */}
            <MenuButton>
              <DragHandleIcon
                style={{ width: "40px", height: "40px", marginRight: "9px" }}
              />
            </MenuButton>
            <MenuList minWidth="100px" style={{ width: "120px" }}>
              <MenuItem style={{ width: "120px" }} onClick={handleProfile}>
                마이페이지
                {/* 마이페이지로 이동할 수 있도록 함 */}
              </MenuItem>
              <MenuItem style={{ width: "120px" }} onClick={handleAccount}>
                계정관리
                {/* 계정관리 페이지로 이동할 수 있도록 함 */}
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default NavBar;
