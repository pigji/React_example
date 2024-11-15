import './App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Aside from './Aside';
import { useState } from 'react';

function App() {
  //클릭한 article 컴포넌트에 해당하는 비디오 소스 경로를 담을 상태값
  const [selectedVideo, setSelectedVideo] = useState(null)

  //함수가 호출되면 비디오 소스 경로를 업데이트함.
  const handleArticleClick = (video) => {
    setSelectedVideo(video)
  }

  //함수가 호출되면 비디오소스 경로를 담은 selectedVideo를 비워줌
  const handleClose = () => {
    setSelectedVideo(null);
  }

  return (
    <main>
      <Header />
      <Nav />
      <section>
        {/* 배열의 갯수만큼 article 컴포넌트를 추가 */}
        {['vids/vid1.mp4','vids/vid2.mp4', 'vids/vid3.mp4', 'vids/vid4.mp4'].map((video, index) => (
          <Article
            key={index}
            video={video}
            onClick={() => handleArticleClick(video)}
          />
        ))}
      </section>
      {/* Aside 컴포넌트로 현재 선택된 비디오소스 경로를 전달, handleClose함수도 같이 전달 */}
      <Aside video={selectedVideo} onClose={() => handleClose()}/>
    </main>
  );
}

export default App;
