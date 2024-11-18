import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  //뉴스 데이터를 담을 상태(state)
  const [data, setData] = useState(null);
  //데이터를 받아오기 위해 비동기 함수로 생성
  const onClick = async () => {
    try{
      //response에 뉴스정보를 받아옴
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ec72d3fbc6c54c8a8757d23b079a9430');
      //뉴스 정보를 data 상태값으로 적용
      setData(response.data)
      console.log(response.data)  //버튼 클릭했을때 data 상태값을 가져오는지 확인
    }
    catch(e){   //응답 오류시 오류를 콘솔에 출력
      console.log(e)
    }
  }
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {/* data가 있으면 textarea태그를 표시하고,  없음녀 표시하지 않는다. */}
      {data && (
        <textarea
          rows={7}
          readOnly={true}
          value={JSON.stringify(data, null, 2)}  //data를 문자열로 반환해서 전달
        />
      )}
    </div>
  );
}

export default App;
