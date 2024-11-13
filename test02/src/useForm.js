//커스텀 훅 생성
import {useState} from 'react';

function useForm(initValue) {   //initValuefh 초기값을 부모 컴포넌트에서 전달받아서 value상태변수에 할당
  const [value, setValue] = useState(initValue)

  const onChangeHandler = (e) => e.target.type === "checkbox" ? 
    setValue({...value, [e.target.name]: e.target.checked}) :
    setValue({...value, [e.target.name]: e.target.value});
  return [value, onChangeHandler, setValue];
}

export default useForm