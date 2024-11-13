//리액트 라이브러리 패키지와 reactDom라이브러리 패키지를 import한다
import React from 'react';
import ReactDOM from 'react-dom/client';

//index.css는 css 서식을 적용한다
//import './index.css';

//App.js 파일에 구현된 App컴포넌트를 import한다
//리액트 앱의 구성요소는 컴포넌트이다
import App from './App';
//reportWebVitals 라이브러리 패키지는 리액트 앱의 성능을 측정하기 위한 패키지이다.

//<div id="root"></div>태그에 App컴포넌트를 렌더링 한다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

