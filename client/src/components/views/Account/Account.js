// import "./Account.css";
// import NavBar from "../NavBar/NavBar";
// import {
//   Button,
//   Input,
//   Image,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { CheckIcon } from "@chakra-ui/icons";
// import { useRef, useState } from "react";

// function Account() {
//   const fileInput = useRef(null);
//   const [imgfile, setimgfile] = useState(
//     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//   );
//   const encodeFileToBase64 = (fileBlob) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(fileBlob);
//     return new Promise((resolve) => {
//       reader.onload = () => {
//         setimgfile(reader.result);
//         resolve();
//       };
//     });
//   };

//   const handleButtonClick = (e) => {
//     fileInput.current.click();
//   };

//   const handleChange = (e) => {
//     encodeFileToBase64(e.target.files[0]);
//   };

//   const handleRemoveClick = (e) => {
//     setimgfile(
//       "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//     );
//   };

//   const [CurrentPassword, setCurrentPassword] = useState("");
//   const [NewPassword, setNewPassword] = useState("");
//   const [NewPasswordCheck, setNewPasswordCheck] = useState("");
//   const [Show, setShow] = useState(false);
//   const [Show_c, setShow_c] = useState(false);
//   const handleClick = () => setShow(!Show);
//   const handleClick_c = () => setShow_c(!Show_c);

//   const CurrentPasswordHandler = (event) => {
//     setCurrentPassword(event.currentTarget.value);
//   };

//   const NewPasswordHandler = (event) => {
//     setNewPassword(event.currentTarget.value);
//   };

//   const NewPasswordCheckHandler = (event) => {
//     setNewPasswordCheck(event.currentTarget.value);
//   };

//   const passwordHandler = () => {
//     if (NewPassword === NewPasswordCheck) {
//       setCurrentPassword(NewPassword);
//     }
//   };

//   const [Username, setUsername] = useState("");
//   const [NewUsername, setNewUsername] = useState("");

//   // const UsernameHandler = (event) => {
//   //   setUsername(event.currentTarget.value);
//   // };

//   const NewUsernameHandler = (event) => {
//     setNewUsername(event.currentTarget.value);
//   };

//   const usernameHandler = () => {
//     setUsername(NewUsername);
//   };
//   console.log(Username);

//   return (
//     <div classNam="account_border">
//       <div className="account">
//         <div>
//           <NavBar />
//           <div className="account_page">
//             <div
//               className="account_border"
//               style={{
//                 marginTop: "3%",
//                 marginLeft: "37%",
//                 width: "27%",
//                 height: "65%",
//                 border: "5px solid #D9D9D9",
//                 borderRadius: "20px",
//               }}
//             >
//               <div
//                 className="account"
//                 style={{
//                   marginTop: "5px",
//                   display: "flex",
//                   marginLeft: "30%",
//                 }}
//               >
//                 <div className="change_img">
//                   <div className="preview">
//                     <div
//                       style={{
//                         marginTop: "64px",
//                         display: "flex",
//                       }}
//                     >
//                       {/* <Button onClick={handleButtonClick}> */}
//                       <Image
//                         borderRadius="full"
//                         boxSize="150px"
//                         src={imgfile}
//                         onClick={handleButtonClick}
//                         style={{ cursor: "pointer" }}
//                       />
//                       {/* </Button> */}
//                       <input
//                         type="file"
//                         accept="image/*"
//                         ref={fileInput}
//                         onChange={handleChange}
//                         style={{ display: "none" }}
//                       />
//                       <div change_img_btn>
//                         <Button
//                           colorScheme="teal"
//                           variant="solid"
//                           onClick={handleRemoveClick}
//                           spacing="6"
//                           marginLeft="40%"
//                           marginTop="30%"
//                         >
//                           적용
//                         </Button>
//                         <Button
//                           colorScheme="teal"
//                           variant="outline"
//                           onClick={handleRemoveClick}
//                           spacing="6"
//                           marginLeft="40%"
//                           style={{
//                             marginTop: "10px",
//                           }}
//                         >
//                           삭제
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="change_img_btn"
//                     style={{
//                       marginLeft: "150px",
//                       display: "flex",
//                     }}
//                   ></div>

//                   <div
//                     className="change_username"
//                     style={{ display: "flex", alignItems: "center" }}
//                   >
//                     <input
//                       type="username"
//                       value={NewUsername}
//                       onChange={NewUsernameHandler}
//                       placeholder="current username"
//                       style={{
//                         // textDecoration: "underline",
//                         // textDecorationThickness: "3px",
//                         borderRadius: "10px",
//                         backgroundColor: "none",
//                         border: "none",
//                         height: "30px",
//                         width: "150px",
//                         fontSize: "large",
//                         marginTop: "20px",
//                       }}
//                     />
//                     <Button
//                       style={{
//                         width: "10px",
//                         height: "20px",
//                         border: "none",
//                         outline: "0",
//                         marginTop: "23px",
//                       }}
//                       onClick={usernameHandler}
//                     >
//                       <CheckIcon />
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               <label
//                 style={{
//                   width: "80%",
//                   marginLeft: "13%",
//                   marginTop: "5%",
//                   marginBottom: "1%",
//                 }}
//               >
//                 현재 비밀번호
//               </label>
//               <InputGroup size="md" style={{ width: "80%", marginLeft: "13%" }}>
//                 <Input
//                   value={CurrentPassword}
//                   onChange={CurrentPasswordHandler}
//                   pr="4.5rem"
//                   type={Show ? "text" : "password"}
//                   placeholder="Enter password"
//                 />
//                 <InputRightElement width="4.5rem">
//                   <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {Show ? "Hide" : "Show"}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//               <label
//                 style={{
//                   width: "80%",
//                   marginLeft: "13%",
//                   marginTop: "3%",
//                   marginBottom: "1%",
//                 }}
//               >
//                 새 비밀번호( 8자 이상 입력하세요. )
//               </label>
//               <InputGroup size="md" style={{ width: "80%", marginLeft: "13%" }}>
//                 <Input
//                   value={NewPassword}
//                   onChange={NewPasswordHandler}
//                   pr="4.5rem"
//                   type={Show ? "text" : "password"}
//                   placeholder="Enter newpassword"
//                 />
//                 <InputRightElement width="4.5rem">
//                   <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {Show ? "Hide" : "Show"}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//               <label
//                 style={{
//                   width: "80%",
//                   marginLeft: "13%",
//                   marginTop: "3%",
//                   marginBottom: "1%",
//                 }}
//               >
//                 새 비밀번호 확인
//               </label>
//               <br />
//               {/* 비밀번호 확인 시작 */}
//               {NewPassword === NewPasswordCheck ? (
//                 <InputGroup
//                   size="md"
//                   style={{ width: "80%", marginLeft: "13%" }}
//                 >
//                   <Input
//                     value={NewPasswordCheck}
//                     onChange={NewPasswordCheckHandler}
//                     pr="4.5rem"
//                     type={Show_c ? "text" : "password"}
//                     placeholder="Enter newpassword"
//                   />
//                   <InputRightElement width="4.5rem">
//                     <Button h="1.75rem" size="sm" onClick={handleClick_c}>
//                       {Show_c ? "Hide" : "Show"}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               ) : (
//                 <div>
//                   <InputGroup
//                     size="md"
//                     style={{ width: "80%", marginLeft: "13%", border: "red" }}
//                   >
//                     <Input
//                       value={NewPasswordCheck}
//                       onChange={NewPasswordCheckHandler}
//                       pr="4.5rem"
//                       type={Show_c ? "text" : "password"}
//                       placeholder="Enter Newpassword"
//                       // style={{ backgroundColor: "red" }}
//                     />
//                     <InputRightElement width="4.5rem">
//                       <Button h="1.75rem" size="sm" onClick={handleClick_c}>
//                         {Show_c ? "Hide" : "Show"}
//                       </Button>
//                     </InputRightElement>
//                   </InputGroup>
//                   <div
//                     style={{
//                       marginLeft: "13%",
//                       color: "red",
//                       fontStyle: "italic",
//                       fontSize: "15px",
//                     }}
//                   >
//                     일치하지 않습니다.
//                   </div>
//                 </div>
//               )}

//               <div className="password_confirm">
//                 <Button
//                   variant="outline"
//                   spacing="6"
//                   style={{
//                     borderRadius: "30px",
//                     marginTop: "35px",
//                     width: "360px",
//                     display: "flex",
//                     marginBottom: "10%",
//                     marginLeft: "13%",
//                   }}
//                   onClick={passwordHandler}
//                   colorScheme="blue"
//                   disabled={
//                     CurrentPassword === "" ||
//                     NewPassword === "" ||
//                     NewPasswordCheck === "" ||
//                     NewPassword !== NewPasswordCheck
//                     //CurrentPassword확인
//                   }
//                 >
//                   변경
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Account;

import "./Account.css";
import NavBar from "../NavBar/NavBar";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Account() {
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPasswordCheck, setNewPasswordCheck] = useState("");
  const [Show, setShow] = useState(false);
  const [Show_c, setShow_c] = useState(false);
  const [Show_cr, setShow_cr] = useState(false);
  const handleClick = () => setShow(!Show);
  const handleClick_c = () => setShow_c(!Show_c);
  const handleClick_cr = () => setShow_cr(!Show_cr);
  const CurrentPasswordHandler = (event) => {
    setCurrentPassword(event.currentTarget.value);
  };

  const NewPasswordHandler = (event) => {
    setNewPassword(event.currentTarget.value);
  };

  const NewPasswordCheckHandler = (event) => {
    setNewPasswordCheck(event.currentTarget.value);
  };

  const passwordHandler = () => {
    if (NewPassword === NewPasswordCheck) {
      setCurrentPassword(NewPassword);
    }
  };

  const handleSubmit = () => {
    const body = {
      password: CurrentPassword,
      newpassword: NewPassword,
    };
    axios
      .post(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/account",
        body
      )
      .then((response) => {
        if (response.data.success) {
          //success대신 숫자로 대신?
          sessionStorage.setItem("user_id", response.data.user_id);
          Navigate("/main");
          alert("비밀번호를 변경하였습니다");
        } else {
          alert("비밀번호 변경에 실패하였습니다");
        }
      });
  };
  //newpassword를 currentpassword로 보내기
  return (
    <div className="account_border">
      <div className="account">
        <div>
          <NavBar />
          <div className="account_page">
            <div
              className="account_border"
              style={{
                marginTop: "10%",
                marginLeft: "37%",
                width: "27%",
                height: "65%",
                border: "5px solid #D9D9D9",
                borderRadius: "20px",
              }}>
              <div
                className="account"
                style={{
                  marginTop: "5px",
                  display: "flex",
                  marginLeft: "30%",
                }}></div>
              <label
                style={{
                  width: "80%",
                  marginLeft: "13%",
                  marginTop: "5%",
                  marginBottom: "1%",
                }}>
                현재 비밀번호
              </label>
              <InputGroup size="md" style={{ width: "80%", marginLeft: "13%" }}>
                <Input
                  value={CurrentPassword}
                  onChange={CurrentPasswordHandler}
                  pr="4.5rem"
                  type={Show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {Show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {/*새 비밀번호*/}
              <label
                style={{
                  width: "80%",
                  marginLeft: "13%",
                  marginTop: "3%",
                  marginBottom: "1%",
                }}>
                새 비밀번호( 8자 이상 입력하세요. )
              </label>
              <InputGroup size="md" style={{ width: "80%", marginLeft: "13%" }}>
                <Input
                  value={NewPassword}
                  onChange={NewPasswordHandler}
                  pr="4.5rem"
                  type={Show_c ? "text" : "password"}
                  placeholder="Enter newpassword"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick_c}>
                    {Show_c ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <label
                style={{
                  width: "80%",
                  marginLeft: "13%",
                  marginTop: "3%",
                  marginBottom: "1%",
                }}>
                새 비밀번호 확인
              </label>
              <br />
              {/* 비밀번호 확인 시작 */}
              {NewPassword === NewPasswordCheck ? (
                <InputGroup
                  size="md"
                  style={{ width: "80%", marginLeft: "13%" }}>
                  <Input
                    value={NewPasswordCheck}
                    onChange={NewPasswordCheckHandler}
                    pr="4.5rem"
                    type={Show_cr ? "text" : "password"}
                    placeholder="Enter newpassword"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick_cr}>
                      {Show_cr ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              ) : (
                <div>
                  <InputGroup
                    size="md"
                    style={{
                      width: "80%",
                      marginLeft: "13%",
                      border: "red",
                    }}>
                    <Input
                      value={NewPasswordCheck}
                      onChange={NewPasswordCheckHandler}
                      pr="4.5rem"
                      type={Show_cr ? "text" : "password"}
                      placeholder="Enter Newpassword"
                      // style={{ backgroundColor: "red" }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick_cr}>
                        {Show_cr ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <div
                    style={{
                      marginLeft: "13%",
                      color: "red",
                      fontStyle: "italic",
                      fontSize: "15px",
                    }}>
                    일치하지 않습니다.
                  </div>
                </div>
              )}
              <div className="password_confirm">
                <Button
                  variant="outline"
                  spacing="6"
                  style={{
                    borderRadius: "30px",
                    marginTop: "35px",
                    width: "360px",
                    display: "flex",
                    marginBottom: "10%",
                    marginLeft: "13%",
                  }}
                  onClick={passwordHandler}
                  colorScheme="blue"
                  disabled={
                    CurrentPassword === "" ||
                    NewPassword === "" ||
                    NewPasswordCheck === "" ||
                    NewPassword !== NewPasswordCheck
                    //CurrentPassword확인
                  }>
                  변경
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
