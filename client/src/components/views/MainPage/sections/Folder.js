import React, { Fragment, useState, useEffect } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
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

function Folder({ CompanyList }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Company, setCompany] = useState("");

  const companyHandler = (event) => {
    setCompany(event.currentTarget.value);
  };

  const companyclickHandler = () => {
    //   setCompanyList([...CompanyList, Company]);
    //   setCompany("");
  };

  const folderHandler = () => {
    // setCompanyList([]);
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
              <DeleteIcon style={{ width: "90%", height: "90%" }} />
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
