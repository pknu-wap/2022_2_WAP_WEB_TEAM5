import React, { Fragment, useState } from "react";
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

function Folder({ CompanyList, setCompanyList, refreshFunction }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Company, setCompany] = useState("");

  const companyHandler = (event) => {
    // 회사의 이름 적는 칸 실시간으로 받아와서 Company에 저장
    setCompany(event.currentTarget.value);
  };

  const companyclickHandler = () => {
    // save 버튼을 눌렀을 때 작동하는 코드
    refreshFunction(Company); // Company의 값을 부모로 return 해준다.
    // setCompanyList([...CompanyList, Company]); // 현재 회사 리스트에 방금 적은 회사를 추가함
    setCompany(""); // 회사가 적혀있는 칸은 다시 공백으로 만듦
  };
  // console.log(CompanyList);

  const folderHandler = () => {
    // 폴더의 동그라미를 눌렀을 때 작동하는 코드
    // setCompanyList([]);
  };

  const deleteHandler = (id) =>
    // (CompanyList.list_id) =>
    {
      setCompanyList(CompanyList.filter((company) => company.list_id !== id));
    };

  return (
    <Fragment>
      {CompanyList &&
        CompanyList.map((company, index) => (
          <Avatar // 폴더의 동그라미
            type="button"
            className="rounded-circle"
            name={company.title}
            getInitials={() => `${company.title}`}
            key={index}
            size="50"
            style={{
              width: "55px",
              height: "55px",
              color: "black",
              backgroundColor: "white",
              marginTop: "40px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <AvatarBadge
              borderColor="white"
              bg="white"
              boxSize="1.25em"
              onClick={folderHandler}
            >
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
          width: "55px",
          height: "55px",
          backgroundColor: "white",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
                onClose();
              }}
            >
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
