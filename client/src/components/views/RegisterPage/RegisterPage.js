import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import sellet from "../LandingPage/SELLET.JPG";
import sellet2 from "../LandingPage/sellet2.JPG";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const [Show, setShow] = useState(false);
  const [Show_c, setShow_c] = useState(false);
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [Email, setEmail] = useState("");
  const handleClick = () => setShow(!Show);
  const handleClick_c = () => setShow_c(!Show_c);

  const IdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const NameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const EmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const PasswordCheckHandler = (event) => {
    setPasswordCheck(event.currentTarget.value);
  };

  const handleSubmit = () => {
    const body = {
      identification: Id,
      password: Password,
      name: Name,
      email: Email,
    };

    axios
      .post(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/register",
        body
      )
      .then((response) => {
        if (response.data.success) {
          navigate("/");
        } else {
          alert("경고");
        }
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <div // 검정색 배경
        style={{
          width: "75%",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
        }}
      >
        <Carousel
          fade
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8%",
            // marginLeft: "7%",
          }}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={sellet} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sellet2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div // 흰색 배경
        style={{
          backgroundColor: "white",
          height: "100vh",
          width: "25%",
          marginTop: "10%",
        }}
      >
        <div
          style={{
            width: "88%",
            marginLeft: "6%",
            // backgroundColor: "gray",
            height: "45%",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            SELETT
          </div>
          <label style={{ width: "80%", marginLeft: "10%" }}>ID</label>
          <Input
            value={Id}
            onChange={IdHandler}
            placeholder="ID"
            style={{ width: "80%", marginLeft: "10%" }}
          />
          <br />

          <label style={{ width: "80%", marginLeft: "10%", marginTop: "3%" }}>
            Name
          </label>
          <Input
            value={Name}
            onChange={NameHandler}
            placeholder="Name"
            style={{ width: "80%", marginLeft: "10%", marginTop: "3%" }}
          />
          <br />
          <label style={{ width: "80%", marginLeft: "10%", marginTop: "3%" }}>
            Email
          </label>
          <Input
            value={Email}
            onChange={EmailHandler}
            placeholder="Email"
            style={{ width: "80%", marginLeft: "10%", marginTop: "3%" }}
          />
          <br />

          <label style={{ width: "80%", marginLeft: "10%", marginTop: "3%" }}>
            password
          </label>
          <InputGroup size="md" style={{ width: "80%", marginLeft: "10%" }}>
            <Input
              value={Password}
              onChange={PasswordHandler}
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
          <label style={{ width: "80%", marginLeft: "10%", marginTop: "3%" }}>
            password check
          </label>
          <br />
          {/* 비밀번호 확인 시작 */}
          {Password === PasswordCheck ? (
            <InputGroup size="md" style={{ width: "80%", marginLeft: "10%" }}>
              <Input
                value={PasswordCheck}
                onChange={PasswordCheckHandler}
                pr="4.5rem"
                type={Show_c ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick_c}>
                  {Show_c ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          ) : (
            <InputGroup size="md" style={{ width: "80%", marginLeft: "10%" }}>
              <Input
                value={PasswordCheck}
                onChange={PasswordCheckHandler}
                pr="4.5rem"
                type={Show_c ? "text" : "password"}
                placeholder="Enter password"
                style={{ backgroundColor: "red" }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick_c}>
                  {Show_c ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          )}

          <br />
          <Button
            colorScheme="gray"
            onClick={handleSubmit}
            style={{ width: "80%", marginLeft: "10%" }}
            disabled={
              Id === "" ||
              Name === "" ||
              Email === "" ||
              Password === "" ||
              PasswordCheck === "" ||
              Password !== PasswordCheck
            }
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
