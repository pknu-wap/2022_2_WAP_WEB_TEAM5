import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
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
import { folderClickIdState, CoverState, CompanyListState } from "../Atom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Folder() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [Company, setCompany] = useState("");
  const [folderClickId, setfolderClickId] = useRecoilState(folderClickIdState);
  const [Cover, setCover] = useRecoilState(CoverState);
  const [CompanyList, setCompanyList] = useRecoilState(CompanyListState);
  const [Loading, setLoading] = useState(false);
  const [placeholderProps, setPlaceholderProps] = useState({});
  const queryAttr = "data-rbd-drag-handle-draggable-id";
  const [Prev, setPrev] = useState("");
  const [Next, setNext] = useState("");

  const companyHandler = (event) => {
    // 회사의 이름 적는 칸 실시간으로 받아와서 Company에 저장
    setCompany(event.currentTarget.value);
  };

  const companyclickHandler = async () => {
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
        // 자식에서 return 받은 company 값을 state에 저장시켜준다.
        // 폴더의 모달창에서 save 버튼을 누르면 입력한 이름이 company로 반환되고 여기로 들어옴

        const body = {
          user_id: 1,
          title: Company,
        };

        try {
          await axios.post(
            // 서버에게 요청하고,
            "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/lists",
            body
          );
          await FolUpdate(); // 요청한 다음에는 FolUpdate 함수 써줌
        } catch (e) {
          console.log(e);
        }
        onClose(); // 모달창을 닫아주는 코드
      } else {
        alert("중복되는 폴더가 존재합니다."); // 중복이라면 alert창을 띄움
      }
    } else {
      alert("값을 입력해주세요"); // 값이 입력되지 않았다면 alert 창을 띄움
    }

    setCompany(""); // 회사가 적혀있는 칸은 다시 공백으로 만듦
  };

  const deleteHandler = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // 삭제 버튼을 누르면 확인창 띄움
      // setCompanyList(CompanyList.filter((company) => company.list_id !== id));
      // 확인을 눌렀다면, 누른 id와 리스트의 id를 비교해서 다른 것들로만 추출하여 CompanyList에 다시 담음
      const body = {
        listId: id,
      };
      try {
        await axios.delete(
          "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/lists",
          { params: body }
        );
        await FolUpdate();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const FolUpdate = async () => {
    // 서버에서 새로 값들을 받아옴(폴더에 관한 내용 처리)
    setLoading(true);
    const response = await axios.get(
      "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/?userId=1"
    );
    setCompanyList(response.data.list);
    setLoading(false);
  };

  const circleClick = (id) => {
    const cov = CompanyList.filter((company) => company.list_id === id);
    // CompanyList에 담겨져있는 폴더들을 살피면서 클릭한 id와 같은 것을 추출해냄
    setCover(cov[0].cover_letter);
    setfolderClickId(id);
    // 폴더를 클릭했을 때 id를 mainPage로 보내줌
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    // drag 끝날 때 호출되는 함수
    // console.log(result);
    if (!result.destination) {
      // list밖으로 빠져나갔을 때 destination이 null로 설정됨
      // => null일 때는 그냥 리턴해줌
      return;
    }

    setCompanyList((items) =>
      reorder(items, result.source.index, result.destination.index)
    );
    console.log(result);

    setPlaceholderProps({});
  };

  const onDragUpdate = (update) => {
    // drag 도중에 변화가 생기면 호출되는 함수
    if (!update.destination) {
      // list 밖으로 빠져나갔을 때 null로 설정
      return;
    }
    // console.log(update);
    const draggableId = update.draggableId;
    const destinationIndex = update.destination.index;

    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);
    if (!draggedDOM) {
      return;
    }
    const { clientHeight, clientWidth } = draggedDOM;

    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, destinationIndex)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  const getListStyle = (isDraggingOver) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "40px",

    ...draggableStyle,
  });

  const reorder = (list, startIndex, endIndex) => {
    let result = Array.from(list);
    let add = [];

    // const [removed] = result.splice(startIndex, 1);
    // result.splice(endIndex, 0, removed);

    // setPrev(result[startIndex].prev)
    let body = {};
    if (startIndex > endIndex) {
      // 밑으로 내려가는 액션일 때,
      // null 처리하기
      body = {
        list_id: result[startIndex].list_id,
        to_move_next_list_id: result[endIndex].next - 1,
        to_move_prev_list_id: result[endIndex].list_id - 1,
      };
    } else {
      // 4번 -> 1번으로 가는 액션일 때
      body = {
        list_id: result[startIndex].list_id,
        to_move_next_list_id: result[endIndex].next,
        to_move_prev_list_id: result[endIndex].list_id,
      };
    }

    console.log(body);
    try {
      axios.put(
        "http://ec2-13-209-139-191.ap-northeast-2.compute.amazonaws.com/lists/position",
        body
      );
      FolUpdate();
    } catch (e) {
      console.log(e);
    }

    if (add.length === 0) {
      // 정렬되도록 만들기
      result &&
        result.map((content, index) => {
          if (content.prev === null) {
            add.push(result[index]);
          } else if (content.next === null) {
            add.push(result[index]);
          } else {
            result &&
              result.map((idSearch) => {
                if (content.next === idSearch.list_id) {
                  add.push(result[index]);
                }
              });
          }
        });
    }

    return add;
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={
                // width: "100%",
                // height: "100%",
                getListStyle(snapshot.isDraggingOver)
              }>
              {CompanyList &&
                CompanyList.map((company, index) => (
                  <Draggable
                    key={`${company.list_id}`}
                    draggableId={`${company.list_id}`}
                    // 달러로 안 하면 작동 안 함
                    index={index}>
                    {/* index는 변하는 값, draggableId는 안 변함 */}
                    {(provided, snapshot) => (
                      <Avatar // 폴더의 동그라미
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        type="button"
                        className="rounded-circle"
                        onClick={() => circleClick(company.list_id)}
                        name={company.title}
                        getInitials={() => `${company.title}`}
                        key={index}
                        size="50"
                        width="55px"
                        height="55px"
                        _hover={{ width: "60px", height: "60px" }}
                        bg="white"
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}>
                        <AvatarBadge
                          borderColor="white"
                          bg="white"
                          boxSize="1.25em">
                          <DeleteIcon
                            style={{ width: "90%", height: "90%" }}
                            onClick={() => deleteHandler(company.list_id)}
                          />
                        </AvatarBadge>
                      </Avatar>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

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
