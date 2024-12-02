import { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './auth/Signup';
//import ExpressTest from './ExpressTest';
import Login from './auth/Login';
import Career from './pages/Career';

//(컴포넌트 전역에서 사용할 상태 값을 생성)다른곳에서도 사용해야 하기 때문에 export를 써주어야 함.
export const UserContext = createContext();

function App() {
  //전역에서 사용할 상태변수
  const [accessToken, setAccessToken ] = useState(null);
  //로그인을 안한 상태는 null로 설정
  return (
    <UserContext.Provider value={{accessToken, setAccessToken}}>
      <Router>
        <Routes>
          {/*Career컴포넌트를 메인페이지로 설정 */}
          <Route path="/" element={<Career />}/>
          {/*/login패스 경로로 Login컴포넌트 설정 */}
          <Route path="/login" element={<Login />}/>
          {/*Signup컴포넌트를 메인페이지로 설정 */}
          <Route path="/join" element={<Signup />}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
