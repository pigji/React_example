import React from 'react'

//App 컴포넌트로부터 props로 비디오 소스 경로를 전달 받음
//onClick = 부모 컴포넌트에서 전달받은 onClick 이벤트 핸들러
const Article = ({ video, onClick }) => {
  const handleMouseEnter = (e) => {
    //article요소에 마우스가 올라가면 영상이 실행되고
    //e.currentTarget = 이벤트가 발생된 요소(article요소)
    e.currentTarget.querySelector("video").play();  //video 재생
  }
  const handleMouseLeave = (e) => {
    //article요소에 마우스가 떠나면 영상이 정지.
    e.currentTarget.querySelector("video").pause(); //video 멈춤
  }
  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(video)}
    >
      <div className='inner'>
        <div className='txt'>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <figure>
          {/* App 컴포넌트로 전달받은 video소스 경로를 src 속성 값으로 할당 */}
          <video src={video} muted loop></video>
        </figure>
      </div>
    </article>
  )
}

export default Article