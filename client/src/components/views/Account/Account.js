import "./Account.css";
import NavBar from "../NavBar/NavBar";
import { Button, Image } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

function Account() {
  const fileInput = useRef(null);
  const [imgfile, setimgfile] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setimgfile(reader.result);
        resolve();
      };
    });
  };

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };

  const handleRemoveClick = (e) => {
    setimgfile(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
  };

  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPasswordCheck, setNewPasswordCheck] = useState("");
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

  const [Username, setUsername] = useState("");
  const [NewUsername, setNewUsername] = useState("");

  // const UsernameHandler = (event) => {
  //   setUsername(event.currentTarget.value);
  // };

  const NewUsernameHandler = (event) => {
    setNewUsername(event.currentTarget.value);
  };

  const usernameHandler = () => {
    setUsername(NewUsername);
  };
  console.log(Username);

  return (
    <div classNam="account_border">
      <div className="account">
        <div>
          <NavBar />
          <div className="account_page">
            <div
              className="account_border"
              style={{
                marginTop: "5%",
                marginLeft: "36%",
                width: "30%",
                height: "70%",
                border: "5px solid #D9D9D9",
                borderRadius: "20px",
              }}
            >
              <div
                className="account"
                style={{
                  marginTop: "5px",
                  display: "flex",
                  marginLeft: "30%",
                }}
              >
                <div className="change_img">
                  <div className="preview">
                    <div
                      style={{
                        marginTop: "64px",
                        display: "flex",
                      }}
                    >
                      {/* <Button onClick={handleButtonClick}> */}
                      <Image
                        borderRadius="full"
                        boxSize="150px"
                        src={imgfile}
                        onClick={handleButtonClick}
                        style={{ cursor: "pointer" }}
                      />
                      {/* </Button> */}
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInput}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <div change_img_btn>
                        <Button
                          colorScheme="teal"
                          variant="solid"
                          onClick={handleRemoveClick}
                          spacing="6"
                          marginLeft="40%"
                          marginTop="30%"
                        >
                          적용
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={handleRemoveClick}
                          spacing="6"
                          marginLeft="40%"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          삭제
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="change_img_btn"
                    style={{
                      marginLeft: "150px",
                      display: "flex",
                    }}
                  ></div>

                  <div
                    className="change_username"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      type="username"
                      value={NewUsername}
                      onChange={NewUsernameHandler}
                      placeholder="current username"
                      style={{
                        textDecoration: "underline",
                        textDecorationThickness: "3px",
                        borderRadius: "10px",
                        backgroundColor: "none",
                        border: "none",
                        height: "30px",
                        width: "150px",
                        fontSize: "large",
                        marginTop: "20px",
                      }}
                    />
                    <Button
                      style={{
                        width: "10px",
                        height: "20px",
                        border: "none",
                        outline: "0",
                        marginTop: "23px",
                      }}
                      onClick={usernameHandler}
                    >
                      <CheckIcon />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="change_password">
                <input
                  type="password"
                  placeholder="   현재 비밀번호"
                  onChange={CurrentPasswordHandler}
                  value={CurrentPassword}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    height: "50px",
                    width: "350px",
                  }}
                />
              </div>

              <div className="change_password">
                <input
                  type="password"
                  placeholder="   새 비밀번호"
                  onChange={NewPasswordHandler}
                  value={NewPassword}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    height: "50px",
                    width: "350px",
                  }}
                />
              </div>

              <div className="change_password">
                <input
                  type="password"
                  placeholder="   새 비밀번호 확인"
                  onChange={NewPasswordCheckHandler}
                  value={NewPasswordCheck}
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#D9D9D9",
                    border: "none",
                    height: "50px",
                    width: "350px",
                  }}
                />
              </div>

              <div
                className="change_password_confirm"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outline"
                  spacing="6"
                  style={{
                    borderRadius: "30px",
                    marginTop: "15px",
                    width: "350px",
                    display: "flex",
                    marginBottom: "10%",
                  }}
                  onClick={passwordHandler}
                  colorScheme="blue"
                  disabled={
                    CurrentPassword === "" ||
                    NewPassword === "" ||
                    NewPasswordCheck == "" ||
                    NewPassword !== NewPasswordCheck
                    //CurrentPassword확인
                  }
                >
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
