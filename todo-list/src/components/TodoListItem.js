import React from "react";
import "./TodoListItem.scss";

//react icons
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

//받아온 todo객체를 구조분해 할당으로 각각 text변수와 checked변수에 나눠서 할당
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    //div로 감싸주고 props로 받아온 style을 적용시켜 줍니다.
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">

        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {" "}
          {/* {checked? 'checkbox' : ""} 와 같은 의미 */}
          {/* checked가 true이면 채크된 체크박스 아이콘을 표시, false이면 체크가 안된 체크박스 아이콘을 표시*/}
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        {/* 삭제버튼을 누르면 TodoListItem에서 onremove함수에 자신이 가진 id를 넣어서 삭제함수를 호출하도록 설정 */}
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
