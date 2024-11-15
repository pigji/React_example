import React, {useState, useCallback} from 'react'
import './TodoInput.scss';
import {MdAdd} from 'react-icons/md';

//App 컴포넌트에서 onInput함수를 파라미터로 받음
const TodoInput = ({onInput}) => {
  //입력 값을 관리할 수 있도록 useState를 사용하여 value상태를 정의
  const [value, setValue] = useState('');
  //input에 글자를 입력할때 컴포넌트가 리렌더링될 때마다 함수를 새로 만들지 않고, 한번만 함수를 만들고 재사용할 수 있도로고 useCallback훅을 사용합니다.
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault(); //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다. 이를 방지하기 위하여 호출
    //onInput함수에 현재 useState를 통해 관리하고 있는 value값을 파라미터로 넣어서 실행
    onInput(value);
    setValue(''); //value 초기화
  }, [onInput, value])

  return (
    <form className='TodoInput' onSubmit={onSubmit}>
      <input 
        placeholder='할 일을 입력하세요.' 
        value={value}
        onChange={onChange}
      />
      <button type='submit'><MdAdd /></button>
    </form>
  )
}

export default TodoInput