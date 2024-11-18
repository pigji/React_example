import React from 'react'
import { useParams } from 'react-router-dom';

const Article = () => {
  //rul파라미터에서 id값을 읽어옵니다.
  const {id} = useParams();
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  )
}

export default Article