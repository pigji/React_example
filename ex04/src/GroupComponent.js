import React, {useState, useCallback} from 'react';
import CounterA from './CounterA';
import CounterB from './CounterB';

function GroupComponent(){
  console.log("GroupComponent 호출됨")
  const [value, setValue] = useState(0);
  const [countA, setCountA] = useState(0);  //CounterA의 상태값을 초기값 0으로 생성
  const [countB, setCountB] = useState(0);  //CounterB의 상태값을 초기값 0으로 생성
  
  //countA값을 1증가 시키는 함수
  //useCallback은 GroupComponent가 처음 마운트될때 생성이 되고, 리렌더링 될때는 다시 생성되지 않는다. 따라서 자식 컴포넌트로 increaseA함수를 다시 생성해서 전달하지 않기 때문에 GroupCompent가 리렌더링 되도 자식 컴포넌트가 리렌더링 되지 않는다.
  
  //useCallback : 컴포넌트가 리렌더링 될때 함수가 다시 생성되는 것을 막아줌
  const increaseA = useCallback(() => {setCountA(countA => countA + 1)}, [])
  //countB값을 1증가 시키는 함수
  const increaseB = useCallback(() => {setCountB(countB => countB + 1)}, [])
  

  return (
    <div className='box'>
      <h1>GroupComponent</h1>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
      {/*생성한 상태값과 상태값을 변경하는 함수를 props로 자식 컴포넌트로 전달*/}
      <CounterA value={countA} increase={increaseA}/>
      <CounterB value={countB} increase={increaseB}/>
    </div>
  )
}
//자식 컴포넌트를 내보내기 할때 React.mono로 감싸주면 부모 컴포넌트가 리렌더링 될때 자식 컴포넌트가 리렌더링 되지 않는다.
export default React.memo(GroupComponent);