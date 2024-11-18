import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Layout() {
  //Link컴포넌트를 사용하지 않고 다른 페이지로 이동할 수 있는 기능
  const navigate = useNavigate();
  function goBack(){
    navigate(-1); //이전 페이지로 이동
  }
  function goArticles(){
    navigate("/articles", {replace: true}) //articles경로로 이동
    //replace: true로 설정하면 이전 경로가 history에 저장되지 않는다. false로 설정하면 뒤로가기 가능
  }
  return (
    <div>
      <header style={{
        background: "lightgray", 
        padding: 16,
        fontSize: 24
        }}>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goArticles}>게시글 목록</button>
          <main>
            <Outlet />
          </main>
      </header>
    </div>
  )
}

export default Layout