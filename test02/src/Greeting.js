//useState훅 임포트
import {useState} from 'react';

const Greeting = () => {
  //loggedIn상태를 생성, 초기값을 false
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {/*체크박스가 체크되면 loggedIn이 true변경되고 체크해제되면 false로 변경 */}
      <input type='checkbox'
        checked={loggedIn}
        onChange={(e) => setLoggedIn(e.target.checked)}
      />
      {/*loggedIn이 true면 welcome Back이 출력되고 false면 please Login이 출력 */}
      {loggedIn ? <p>Welcome Back!</p> : <p>Please Login</p>}
    </div>
  )
}

export default Greeting;