/* 자동완성 : rafce + Enter */

import React, {useEffect, useRef} from 'react'
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid #ccc;
  padding: 5px;
  overflow-y: scroll;
  width: ${props => props.w};
  height: ${props => props.h};
`;  //width와 hegiht를 외부에서 전달받은 w와 h값으로 대입한다.

//children은 스크롤박스 컴포넌트의 자식 컴포넌트를 전달받음
const ScrollBox = ({width, height, children}) => {
  //divRef 참조변수를 생성. 특정 DOM요소를 직접 다룰때 사용한다.
  const divRef = useRef(null);  // 이 변수에 대입된 값은 컴포넌트가 unmount될때까지 계속 유지된다.
  
  //컴포넌트가 렌더링된 후 divRef에 할당된 요소 위치로 스크롤을 이동합니다.
  useEffect(() => divRef.current?.scrollIntoView())
  // ?. = divRef.current가 null이거나 nudefined일 경우 오류가 발생하지 않도록 한다.

  return (
    //Div컴포넌트의 w, h를 props로 전달
    <Div w={width} h={height}>
      {children}
      {/* divRef로 div요소를 넣습니다.(참조) */}
      <div ref={divRef}></div>
    </Div>
  )
}

export default ScrollBox