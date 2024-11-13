import React from 'react'

const Column = () => {
  
  const todoList = ["코딩하기", "밥먹기", "커피 마시기"];

  return (
    <>
      {todoList.map((todo, idx) => (
        <td key={idx}>{todo}</td>
      ))}
    </>
  )
}

export default Column