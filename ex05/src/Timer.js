import React, {useState, useEffect} from 'react'
//기본 사용법
//1. 카운트는 useStat로 상태 관리
//2. useEffect로 현재 시간을 콘솔로 출력
// 현재 시간을 구하는 메서드 = new Date().toLocaleTimeString()

const Timer = () => {
  const [count, setCount] = useState(0);
  //useEffect를 사용하여 count가 변경될때마다 콘솔에 현재 시간과 count를 출력
  useEffect(() => {
    console.log(`Count: ${count}, Time: ${new Date().toLocaleTimeString()}`)
  }, [count]) //의존성 배열에 count를 추가
  return(
    <div>
      <p>Count: </p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Timer