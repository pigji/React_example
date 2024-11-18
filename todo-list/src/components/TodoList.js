import React, {useCallback} from 'react'
//react-virtualized 임포트
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem'
import './TodoList.scss';

//부모 컴포넌트에서 전달받은 todos를 비구조화 할당으로 받음
const TodoList = ({todos, onRemove, onToggle}) => {   //onRemove함수를 TodoListItem에 그대로 전달
  const rowRender = useCallback(({index, key, style}) => {
    const todo = todos[index]
    console.log(todo) // 출력되는지 확인

    return (
      <TodoListItem 
        todo={todo} 
        key={todo.key} 
        onRemove={onRemove} 
        onToggle={onToggle} 
        style={style}
      />
    )
  }, [onRemove, onToggle, todos])
  return (
    <List 
      className='TodoList'
      width={512}   //전체 크기
      height={513}  //전체 높이
      rowCount={todos.length}   //항목 갯수
      rowHeight={57}  //항목의 높이
      rowRenderer={rowRender}   //항목을 렌더링할때 쓰는 함수
      list={todos}  //배열
      style={{outline: 'none'}} //list에 기본으로 적용되는 outline 스타일을 제거
    />
  )
}

export default React.memo(TodoList)