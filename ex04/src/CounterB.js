import React from 'react';

function CounterB({value, increase}){
  console.log("CounterB 호출됨")
  //value값을 0으로 초기화
  //const [value, setValue] = useState(0);
  return (
    <div className='box'>
      <h1>CounterB</h1>
      {/*버튼을 누를때마다 value값을 1씩 증가 */}
      <button onClick={increase}>
        {value}
      </button>
    </div>
  )
}

export default React.memo(CounterB);