import "./Account.css";
import NavBar from "../NavBar/NavBar";
import { Button, ButtonGroup, Image } from "@chakra-ui/react";
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

  const [CurrentPassword, setcurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPassword_re, setNewPassword_re] = useState("");
  const currentpasswordHandler = (event) => {
    setcurrentPassword(event.currentTarget.value);
  };
  const NewpasswordHandler = (event) => {
    setNewPassword(event.currentTarget.value);
  };
  const NewpasswordHandler_re = (event) => {
    setNewPassword_re(event.currentTarget.value);
  };

  const passwordHandler = () => {
    if (NewPassword === NewPassword_re) {
      setcurrentPassword(NewPassword);
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
    <div className="account">
      <div>
        <NavBar />
        <div
          className="account"
          style={{
            marginTop: "10px",
            display: "flex",
            marginLeft: "700px",
          }}
        >
          <div className="change_img">
            <div className="preview">
              <div
                style={{
                  marginTop: "100px",
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
              </div>
            </div>
            <div className="change_img_btn">
              <Button
                onClick={handleRemoveClick}
                variant="outline"
                spacing="6"
                colorScheme="yellow"
              >
                삭제
              </Button>
            </div>

            <div className="change_username">
              <input
                type="username"
                value={NewUsername}
                onChange={NewUsernameHandler}
                placeholder="current user name"
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
                  width: "15px",
                  height: "20px",
                  display: "flex",
                  marginLeft: "180px",
                  border: "none",
                  outline: "0",
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
            placeholder="현재 비밀번호"
            onChange={currentpasswordHandler}
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
            placeholder="새 비밀번호"
            onChange={NewpasswordHandler}
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
            placeholder="새 비밀번호 확인"
            onChange={NewpasswordHandler_re}
            value={NewPassword_re}
            style={{
              borderRadius: "10px",
              backgroundColor: "#D9D9D9",
              border: "none",
              height: "50px",
              width: "350px",
            }}
          />
        </div>

        <div className="change_password_confirm">
          <ButtonGroup variant="outline" spacing="6">
            <Button onClick={passwordHandler} colorScheme="blue">
              변경
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Account;
