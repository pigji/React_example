import React from 'react'
//다른 페이지로 이동하는 링크 보여주기
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      {/* to = path경로 */}
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profiles/minsu">profile1</Link></li>
        <li><Link to="/profiles/gildong">profile2</Link></li>
        <li><Link to="/profiles/void">존재하지 않는 프로필</Link></li>
      </ul>
    </div>
  )
}

export default Home