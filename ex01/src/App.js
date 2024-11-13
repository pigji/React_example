import React from 'react';
import './App.css';
//컴포넌트들을 불러옴
import JSXtest from './components/JSXtest';
import Styletest from './components/Styletest';
import './style.css'; //스타일시트를 임포트

import TableComponent from './components/TableComponent';

function App() {

  return ( 
    <div className="App">
      {/*자식 컴포넌트를 적용 */}
      <JSXtest />
      <Styletest />
      {/*컴포넌트 재사용*/}
      <JSXtest />
      <TableComponent />
    </div>
  )
}

export default App;