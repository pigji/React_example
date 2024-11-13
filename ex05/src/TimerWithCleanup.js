import React, { useState, useEffect } from 'react';
//타이머 구현
//useEffect를 사용하여 컴포넌트가 렌더링될 때 1초마다 카운트가 증가하는 타이머를 구현하세요.
//타이머를 클린업(clean up)하여 컴포넌트가 언마운트될 때 타이머를 정리하세요.

const TimerWithCleanup = () => {
  const [count, setCount] = useState(0)
  //1. 타이머 메서드로 1초마다 1씩 증가하는 타이머 구현(setInterval())
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1)  //이 코드는 마운트될때 실행이 되기 때문에 그냥 count상태 값에 1을 더해서 전달하면 값이 증가하지 않음, useState의 값을 인자로 받아서 그 값에 1을 더해서 설정함수로 전달하면 증가된 값을 전달할 수 있다.
      
      //클립업 함수 반환
      return () => {
        clearInterval(timer)  //컨포넌트가 언마운트 될때 clearInterval로 반복함수를 종료함
      };
    }, 1000)
  }, [])
  //2. 언마운트될 때 타이머를 정리(clearInterval())
  return (
    <div>
      <p>Timer: {count}s</p>
    </div>
  );
}

export default TimerWithCleanup;