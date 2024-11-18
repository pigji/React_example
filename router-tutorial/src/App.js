import './App.css';
//Route 컴포넌트로 특정 경로에 원하는 컴포넌트를 보여줄 수 있다.
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* url파라미터는 /profiles/:username과 같이 경로에 :을 사용항 설정 */}
      <Route path='/profiles/:username' element={<Profile />} />
    </Routes>
  );
}

export default App;
