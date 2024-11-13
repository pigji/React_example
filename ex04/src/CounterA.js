import {useState} from 'react';

function CounterA(){
  console.log("CounterA 호출됨")

  //value값을 0으로 초기화
  const [value, setValue] = useState(0);
  return(
    <div className='box'>
      <h1>CounterA</h1>
      
      {/*버튼을 누를때마다 value값을 1씩 증가*/}
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
    </div>
  )
}

export default CounterA;