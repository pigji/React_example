import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext';


const Header = () => {
  //isDark가 true면 배경색을 검은색, 글자색은 흰색을 주고 반대로 false면 배경색을 흰색, 글자색을 검은색으로 적용
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  
  return (
    <header
     className='header'
     style={{
      backgroundColor: isDark ? 'black' : 'lightgray',
      color: isDark ? 'white' : 'black'
     }}
    >
      <h1>Welcome {user}</h1>
      {/*<h1>Welcome {user}</h1>*/}
    </header>
  )
}

export default Header