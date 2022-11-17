import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CompanyListState } from "../MainPage/Atom";
import Navbar from "../NavBar/NavBar";

const Profile = () => {
  const [CompanyList, setCompanyList] = useRecoilState(CompanyListState);
  // Recoil을 이용하여 CompanyList를 받아온다.
  // console.log(CompanyList);

  const grid = 8;
  // 그냥 css 설정하기위해 있는듯

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // 각각의 요소 css

    // userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    // 이것도 css 설정하기 위해 있음

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
    // drag중이면 초록색으로 보이게 설정

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    // 이건 그 밖에 있는 것의 css(요소들을 담는 div)
    padding: grid,
    width: 500,
    position: "relative",
  });

  const queryAttr = "data-rbd-drag-handle-draggable-id";
  //이건 아마 그대로 내두면 되는 거 같은데

  const [placeholderProps, setPlaceholderProps] = useState({});
  // 일단 이런 state가 있다 정도로 알고가보자

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    // drag 끝날 때 호출되는 함수
    console.log(result);
    if (!result.destination) {
      // list밖으로 빠져나갔을 때 destination이 null로 설정됨
      // => null일 때는 그냥 리턴해줌
      return;
    }

    setCompanyList((items) =>
      reorder(items, result.source.index, result.destination.index)
    );

    setPlaceholderProps({});
  };

  const onDragUpdate = (update) => {
    // drag 도중에 변화가 생기면 호출되는 함수
    if (!update.destination) {
      // list 밖으로 빠져나갔을 때 null로 설정
      return;
    }
    console.log(update);
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

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <Navbar />
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {CompanyList.map((item, index) => (
              <Draggable
                key={`item${item.list_id}`}
                draggableId={`item-${item.list_id}`}
                index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}>
                    <label>index: {index}</label>
                    <br />
                    <label>item.index: {item.list_id}</label>
                    <br />
                    <label>item.value: {item.title}</label>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
            {/* <CustomPlaceholder snapshot={snapshot} /> */}
            <div
              style={{
                position: "absolute",
                top: placeholderProps.clientY,
                left: placeholderProps.clientX,
                height: placeholderProps.clientHeight,
                background: "tomato",
                width: placeholderProps.clientWidth,
              }}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

// }

export default Profile;
