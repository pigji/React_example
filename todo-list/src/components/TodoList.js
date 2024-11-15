import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss';

//부모 컴포넌트에서 전달받은 todos를 비구조화 할당으로 받음
const TodoList = ({todos, onRemove, onToggle}) => {   //onRemove함수를 TodoListItem에 그대로 전달
  return (
    <div className='Todolist'>
      {/* todos배열을 순회하면서 todo로 배열요소를 참조, TodoListItem 컴포넌트의 props로 todo를 전달 */}
      {todos.map(todo => (
        <TodoListItem 
          todo={todo} 
          key={todo.id} 
          onRemove={onRemove} 
          onToggle={onToggle} 
        />
      ))}
    </div>
  )
}

export default TodoList