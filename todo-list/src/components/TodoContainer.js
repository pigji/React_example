import React from 'react'
import './TodoContainer.scss';

//children은 부모 컴포넌트에서 전달받은 자식객체
const TodoContainer = ({children}) => {
  return (
    <div className='TodoContainer'>
      <div className='app-title'>일정 관리</div>
      <div className='contnet'>{children}</div>
    </div>
  )
}

export default TodoContainer