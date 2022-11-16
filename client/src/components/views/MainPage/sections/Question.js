import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
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
import QuestionList from "./QuestionList";
import { CoverState, CompanyListState, folderClickIdState } from "../Atom";
import axios from "axios";

function Question({ Cov, setCov }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Content, setContent] = useState([]);
  const [Cover, setCover] = useRecoilState(CoverState);
  const [CompanyList, setCompanyList] = useRecoilState(CompanyListState);
  const [folderClickId, setFolderClickId] = useRecoilState(folderClickIdState);

  const ContentHandler = (event) => {
    setContent(event.currentTarget.value);
  };

  const contentclickHandler = async () => {
    let va = false;

    if (Content) {
      Cover.map((list, index) => {
        if (list.title === Content) {
          va = true;
          return va;
        }
      });

      if (va === false) {
        // 자식에서 return 받은 title 값을 state에 저장 시킨다.
        // file 모달창에서 save 누르면 나오는 함수
        const body = {
          title: Content,
          list_id: folderClickId === 0 ? CompanyList[0].list_id : folderClickId,
          // 제일 첫 화면일 때는 0번째 리스트의 id를 반환
        };

        try {
          await axios.post(
            "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/cover-letters",
            body
          );
          await fileUd();
        } catch (e) {
          console.log(e);
        }
        onClose();
      } else {
        alert("중복되는 파일이 존재합니다.");
      }
    } else {
      alert("값을 입력해주세요");
    }

    setContent("");
  };

  useEffect(() => {
    const cov = CompanyList.filter(
      (company) => company.list_id === folderClickId
    );

    if (cov[0]) {
      setCov(cov[0].title);
    }
  }, [folderClickId]);

  const fileUd = async () => {
    const response = await axios.get(
      "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
    );
    const fileList = await response.data.list.filter(
      (company) =>
        company.list_id ===
        (folderClickId === 0 ? CompanyList[0].list_id : folderClickId)
      // 제일 첫 화면일 때는 0번째 리스트의 id를 반환
    );
    // 폴더의 list를 돌려서 folderClickId와 똑같은 id에 해당하는 파일의 정보를 fileList에 담는다.
    setCompanyList(response.data.list);
    if (fileList[0]) {
      setCover(fileList[0].cover_letter);
      setCov(fileList[0].title);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "80px",
          borderBottom: "1px solid black",
          justifyContent: "space-between",
        }}>
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
          }}>
          {Cov}
        </div>
        <AddIcon
          onClick={onOpen}
          color="white"
          style={{
            lineHeight: "0px",
            width: "7%",
            cursor: "pointer",
            height: "80px",
            paddingTop: "2%",
            marginRight: "10%",
          }}></AddIcon>
      </div>

      {Cover &&
        Cover.map((content, index) => (
          <QuestionList
            key={index}
            content={content}
            setCover={setCover}
            Cover={Cover}
            fileUd={fileUd}
          />
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
                // onClose();
                contentclickHandler();
              }}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Question;
