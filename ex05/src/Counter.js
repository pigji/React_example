//useEffect훅과 useState훅을 임포트
import React, {useEffect, useState} from 'react'

const Counter = () => {
  const [count1, setCount1] = useState(0);  //count1상태의 초기값을 0으로 설정
  const [count2, setCount2] = useState(0);  //count2상태의 초기값을 0으로 설정
  
  //useEffect함수가 호출(마운트, 업데이트, 언마운트 될때 호출된다.)
  useEffect(() => console.log("useEffect #1", count1), [])  //마운트 될때만 호출
  useEffect(() => console.log("useEffect #1", count2), [count2])  //count2가 업데이트 될때 호출
  useEffect(() => {
    console.log('mount')  //마운트 될때 실행
    return () => console.log('unmount');  //언마운트 될때 실행
  }, [])

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <div>
        <span>{count1}</span> {/*count1 상태변수 값 출력*/}
        {/*버튼을 클릭하면 setCount1 설정함수를 호출하여 count1에 값을 +1 증가시킴*/}
        <button onClick={e => setCount1(count1+1)}>++</button>
      </div>
      <div>
        <span>{count2}</span> {/*count2 상태변수 값 출력*/}
        <button onClick={e => setCount2(count2+1)}>++</button>
      </div>
    </div>
  )
}

export default Counter