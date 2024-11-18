import React from 'react'
//URL 끝 ? 뒤에 파라미터를 나타내는 문자열을 추하개 서버에 요청할 때 추가 정보를 전달하는 방법
import { useLocation } from 'react-router-dom'
//쿼리에서 ?를 지우고 &를 분리한 뒤 key와 value로 파싱하는 작업
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation(); //location 객체를 반환(페이지의 정보를 가지고 있다)
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");  //get메소드로 detail 값을 조회
  const page = parseInt(searchParams.get("page") || 0)  //get메소드로 page값을 조회하는데 만약 값이 없으면 0을 반환


  function onToggleDetail() {
    setSearchParams((prev) => ({
      ...prev,
      detail: detail === "true" ? "false" : "true",
      page,
    }));
  }

  function onIncreasePage() {
    setSearchParams((prev) => ({ ...prev, detail, page: page + 1 }));
  }
  
  return (
    <div>
      <h1>About</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <p>쿼리스트링 : {location.search}</p>
      <p>detail : {detail}</p>
      <p>page : {page}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreasePage}>page + 1</button>
    </div>
  )
}

export default About