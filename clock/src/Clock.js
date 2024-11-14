/*시작 단축코드 fac*/

import React, {useEffect, useState} from 'react'

export const Clock = () => {
  //현재 날짜정보를 상태에 time 상태변수에 넣어줌
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])  //빈 배열을 전달해서 마운트될때 한번만 useEffect를 호출
  return (
    <div className='clock'>
      <h1>시계</h1>
      {/*
        Date.toLocaleDateString = 날짜 정보
        Date.toLocaleTimeString = 시간 정보
      */}
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock