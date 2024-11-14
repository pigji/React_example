import { useEffect, useState } from "react";

//외부에서 생성한 스타일 컴포넌트를 임포트해서 내부에서 사용
import { 
  Header, HeaderTitle, NavList, NavItem, Main, FilterList, FilterItem, Article,
  ArticleDiv, ArticleImg, ArticleTitle, ArticleContent
} from "./styled";

//React-icon 임포트
import {FaTwitterSquare, FaFacebook, FaEnvelope} from 'react-icons/fa';

//Isotope API 임포트
import Isotope from 'isotope-layout';

function App() {
  //isotope객체를 할당할 상태변수
  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    //Isotope객체를 생성해서 article들을 정렬
    const iso = new Isotope('.section', {
      itemSelector: Article,
      columnWidth: Article,
      transitionDuration: '0.5s'
    })
    //생성된 Isotope객체를 isotope상태에 저장
    setIsotope(iso)
  }, []);  //컴포넌트가 마운트될때 한번만 실행

  //버튼을 클릭했을때 해당 article만 화면에 나오도록 제어하는 함수
  const FilterItems = (filter) => {   //filter는 all, odd(홀수), even(짝수)가 전달되는데 화면에 표시할 article의 클래스 이름이다.

    //isotope상태에 객체가 담겨있으면 실행
    if(isotope){
      isotope.arrange({filter}); //인자로 전달받은 선택자를 arrange메소드의 인자로 절달하면 해당 요소만 화면에 나타남.
    }
  };

  const articles = [
    { id: 1, src: './img/p1.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 2, src: './img/p2.jpg', title: 'Here comes title.', className: 'even' },
    { id: 3, src: './img/p3.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 4, src: './img/p4.jpg', title: 'Here comes title.', className: 'even' },
    { id: 5, src: './img/p5.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 6, src: './img/p6.jpg', title: 'Here comes title.', className: 'even' },
    { id: 7, src: './img/p7.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 8, src: './img/p8.jpg', title: 'Here comes title.', className: 'even' },
    { id: 9, src: './img/p9.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 10, src: './img/p10.jpg', title: 'Here comes title.', className: 'even' },
    { id: 11, src: './img/p11.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 12, src: './img/p12.jpg', title: 'Here comes title.', className: 'even' },
    { id: 13, src: './img/p13.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 14, src: './img/p14.jpg', title: 'Here comes title.', className: 'even' },
    { id: 15, src: './img/p15.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 16, src: './img/p16.jpg', title: 'Here comes title.', className: 'even' },
    { id: 17, src: './img/p17.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 18, src: './img/p18.jpg', title: 'Here comes title.', className: 'even' },
    { id: 19, src: './img/p19.jpg', title: 'Here comes title.', className: 'odd' },
    { id: 20, src: './img/p20.jpg', title: 'Here comes title.', className: 'even' },
  ];

  return (
    <>
      <Header>
        <HeaderTitle>DECODE LAB</HeaderTitle>
        <NavList>
          <NavItem><FaTwitterSquare /> Twitter</NavItem>
          <NavItem><FaFacebook /> Facebook</NavItem>
          <NavItem><FaEnvelope /> E-mail</NavItem>
        </NavList>
      </Header>
      <Main>
        <FilterList>
          {/* 화면에 표시할 클래스 이름을 filterItems함수의 인자로 전달 */}
          <FilterItem onClick={() => FilterItems("*")}>ALL</FilterItem>
          <FilterItem onClick={() => FilterItems(".odd")}>ODD</FilterItem>
          <FilterItem onClick={() => FilterItems(".even")}>EVEN</FilterItem>
        </FilterList>
        <section className='section'>
          {/* 
            articles배열을 순회하여 배열요소를 article매개변수에 할당
            article의 갯수만큼 article객체에 할당한 데이터를 사용하여 카드 형태의 요소를 추가
          */}
          {articles.map(article => (
            <Article className={article.className} key={article.id}>
              <ArticleDiv>
                <ArticleImg src={article.src} alt="" />
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleContent>Here comes content description in detail.</ArticleContent>
              </ArticleDiv>
            </Article>
          ))}
        </section>
      </Main>
    </>
  );
}

export default App;
