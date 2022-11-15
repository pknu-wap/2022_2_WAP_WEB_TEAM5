import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import axios from "axios";

function Folder({
  CompanyList,
  setCompanyList,
  refreshFunction,
  circleOnClick,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Company, setCompany] = useState("");
  const navigate = useNavigate();

  const companyHandler = (event) => {
    // 회사의 이름 적는 칸 실시간으로 받아와서 Company에 저장
    setCompany(event.currentTarget.value);
  };

  const companyclickHandler = () => {
    // save 버튼을 눌렀을 때 작동하는 코드

    let va = false; // 일단 false로 저장해놓음(중복 여부 / 중복일 시 true)

    if (Company) {
      // 만약에 폴더 이름을 적는 칸에 문자가 있으면
      CompanyList.map((list, index) => {
        // map 시켜서
        if (list.title === Company) {
          // 이전에 있던 것들과 중복인지 검사
          va = true; // 중복이라면 true로 바꿔줌
          return va;
        }
      });
      if (va === false) {
        // 중복이 아니라면
        refreshFunction(Company); // mainPage로 폴더 이름을 보내줌
        onClose(); // 모달창을 닫아주는 코드
      } else {
        alert("중복되는 폴더가 존재합니다."); // 중복이라면 alert창을 띄움
      }
    } else {
      alert("값을 입력해주세요"); // 값이 입력되지 않았다면 alert 창을 띄움
    }

    setCompany(""); // 회사가 적혀있는 칸은 다시 공백으로 만듦
  };

  const deleteHandler = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // 삭제 버튼을 누르면 확인창 띄움
      // setCompanyList(CompanyList.filter((company) => company.list_id !== id));
      // 확인을 눌렀다면, 누른 id와 리스트의 id를 비교해서 다른 것들로만 추출하여 CompanyList에 다시 담음
      const body = {
        listId: id,
      };
      console.log(body);

      axios
        .delete(
          "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/lists",
          { params: body }
        )
        .then((response) => {
          if (response.status === 200) {
            alert("삭제 성공");
            window.location.replace("/main");
          }
        });
    }
  };

  const circleClick = (id) => {
    circleOnClick(id);
    // 폴더를 클릭했을 때 id를 mainPage로 보내줌
    console.log(CompanyList.filter((company) => company.list_id === id));
  };

  return (
    <Fragment>
      {CompanyList &&
        CompanyList.map((company, index) => (
          <Avatar // 폴더의 동그라미
            type="button"
            className="rounded-circle"
            onClick={() => circleClick(company.list_id)}
            name={company.title}
            getInitials={() => `${company.title}`}
            key={index}
            size="50"
            width="55px"
            height="55px"
            _hover={{ width: "65px", height: "65px" }}
            bg="white"
            style={{
              color: "black",
              marginTop: "40px",
              cursor: "pointer",
              fontWeight: "bold",
            }}>
            <AvatarBadge borderColor="white" bg="white" boxSize="1.25em">
              <DeleteIcon
                style={{ width: "90%", height: "90%" }}
                onClick={() => deleteHandler(company.list_id)}
              />
            </AvatarBadge>
          </Avatar>
        ))}
      <button // 폴더의 동그라미
        className="rounded-circle"
        onClick={onOpen}
        style={{
          minWidth: "55px",
          minHeight: "55px",
          backgroundColor: "white",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <AddIcon />
      </button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ marginTop: "10px" }}>
            이름을 정해주세요
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>회사 이름</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Company"
                value={Company}
                onChange={companyHandler}
                focusBorderColor="gray.300"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                companyclickHandler();
                // onClose();
              }}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

export default Folder;
