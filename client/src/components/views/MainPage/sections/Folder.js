import React, { Fragment, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/menu";
import { ContextMenu } from "chakra-ui-contextmenu";

function Folder(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Company, setCompany] = useState("");
  const [CompanyList, setCompanyList] = useState(["빈 폴더"]);

  const companyHandler = (event) => {
    setCompany(event.currentTarget.value);
  };

  const companyclickHandler = () => {
    setCompanyList([...CompanyList, Company]);
    setCompany("");
  };

  return (
    <Fragment>
      {CompanyList &&
        CompanyList.map((company, index) => (
          <Menu>
            <MenuButton // 폴더의 동그라미
              type="button"
              className="rounded-circle"
              key={index}
              value={company}
              style={{
                width: "55px",
                height: "55px",
                color: "black",
                backgroundColor: "white",
                marginTop: "40px",
                cursor: "pointer",
              }}
            ></MenuButton>
            <MenuList minWidth="30px" style={{}}>
              <MenuItem>수정</MenuItem>
              <MenuItem>삭제</MenuItem>
            </MenuList>
          </Menu>
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
