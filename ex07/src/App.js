import './App.css';
import {useRef, useState} from 'react';
import ScrollBox from './ScrollBox';
import styled from 'styled-components';

const Div = styled.div`
  padding: 20px;
  & select {
    padding: 5px;
    width: 100px;
  }
  & button {
    padding" 5px 20px;
    margin-left: 10px;
  }
`;

function App() {
  
  //데이터 목록 상태
  const [list, setList] = useState([]); //초기값 빈 배열
  
  //색상을 저장하는 레퍼런스(참조변수)를 생성합니다.
  const colorRef = useRef('#ffa');

  //add버튼이 클릭되면, 이 함수가 호출된다.
  const addItem = () => {
    const time = new Date().toLocaleTimeString();
    //현재 시각 문자열이 데이터 목록에 추가된다.
    setList([...list, {time, color: colorRef.current}]); //list에 시간과 색상 정보를 객체로 넣어줌
  }

  return (
		<Div>
			{/*onChange이벤트를 통해 사용자가 선택한 색상을 colorRef에 저장합니다.*/}
			<select onChange={e => colorRef.current = e.target.value}>
				<option value="#ffa">yellow</option>
				<option value="#dfd">green</option>
				<option value="#ccf">blue</option>
				<option value="#fdd">red</option>
			</select>
			
			<div style={{ padding:20 }}>
				<button onClick={addItem}>Add Item</button>
				<ScrollBox width="200px" height="500px">
					{list.map(item => 
            //item객체의 color프로퍼티에 담겨있는 colorRef값을 배경색으로 적용
            <p style={{backgroundColor: item.color}} key={item.time}>
              {item.time}
            </p>
					)}
				</ScrollBox>
			</div>
		</Div>
	);
}

export default App;
