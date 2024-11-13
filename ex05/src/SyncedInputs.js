import React, { useState, useEffect } from 'react';
//의존성 배열 사용하기(dependency)
//두 개의 입력 필드를 만들고, 하나의 입력 값이 변경될 때마다 다른 입력 필드의 값을 업데이트하세요.
//useEffect를 사용하여 입력 필드의 값이 변경될 때마다 콘솔에 로그를 찍으세요.

const SyncedInputs = () => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");

  //입력값이 변경될 때마다 콘솔에 로그를 찍는 코드 구현
  useEffect(() => {
    console.log(`Input1 : ${input1}`)
    console.log(`Input2 : ${input2}`)
  }, [input1, input2])  //input1과 input2가 변경될때 마다 콜손에 input1과 input2를 출력
  
  // useEffect(() => {
  //   console.log(`Input2 : ${input2}`)
  // }, [input2])  //input2이 변경될때 마다 콜손에 input2을 출력

  return (
    <div>
	    {/* input1이 변경되면 input2도 변경되도록 작성 */}
      <input
        type="text"
        value={input1}
        placeholder="Input 1"
        onChange={(e) => {
          setInput1(e.target.value)
          setInput2(e.target.value) //setInput2 설정함수로 입력된 값을 보내서 input2상태의 값을 변경함
        }}
      />
      {/* input2가 변경되면 input1도 변경되도록 작성 */}
      <input
        type="text"
        value={input2}
        placeholder="Input 2"
        onChange={(e) => {
          setInput1(e.target.value)
          setInput2(e.target.value) //setInput2 설정함수로 입력된 값을 보내서 input2상태의 값을 변경함
        }}
      />
    </div>
  );
};

export default SyncedInputs;