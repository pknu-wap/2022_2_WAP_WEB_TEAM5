import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";

function Folder() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Content, setContent] = useState([]);
  const [ContentList, setContentList] = useState(["빈 파일"]);
  const [Company, setCompany] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1&&"
      )
      .then((response) => {
        // console.log(response.data);
        setContentList(response.data.list[0].cover_letter);
        setCompany(response.data.list[0]);
        // console.log(response.data.list[0].cover_letter[0].title);
        // setTitle(response.data.list[0].cover_letter[0].title);
      });
  }, []);

  const ContentHandler = (event) => {
    setContent(event.currentTarget.value);
  };

  const contentclickHandler = () => {
    // setContentList([...ContentList, Content]);
    // setContent("");
  };

  const deleteClick = () => {
    // setContentList([]);
  };

  // const folderDelete = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "80px",
          borderBottom: "1px solid black",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            paddingLeft: "25px",
            height: "80px",
            color: "white",
            fontSize: "20px",
            width: "60%",
            fontWeight: "bold",
            lineHeight: "85px",
            overflow: "hidden",
          }}
        >
          {/* 빈 폴더 */}
          {Company.title}
        </div>
        <AddIcon
          onClick={onOpen}
          color="white"
          style={{
            // display: "flex",
            lineHeight: "0px",
            width: "7%",
            cursor: "pointer",
            height: "80px",
            // paddingBottom: "10px",
            paddingTop: "2%",
            marginRight: "10%",
          }}
        ></AddIcon>
      </div>

      {ContentList &&
        ContentList.map((content, index) => (
          <Button
            key={index}
            colorScheme="whiteAlpha"
            variant="ghost"
            onClick={deleteClick}
            // justifyContent="flex-start"
            justifyContent="space-between"
            style={{
              paddingLeft: "25px",
              height: "50px",
              color: "white",
              fontSize: "15px",
              textAlign: "left",
              width: "100%",
              marginTop: "10px",
              overflow: "scroll",
              // float: "left",
              border: "none",
              outline: "0",
            }}
          >
            {content.title}
            <DeleteIcon />
          </Button>
        ))}
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ marginTop: "10px" }}>
            추가할 파일의 이름을 입력해주세요
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>파일 이름</FormLabel>
              <Input
                focusBorderColor="gray.300"
                ref={initialRef}
                placeholder="file name"
                value={Content}
                onChange={ContentHandler}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                contentclickHandler();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Folder;
