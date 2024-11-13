import {useState} from 'react';
import './App.css';
import Counter from './Counter';
import Timer from './Timer';
import Lifecycle from './Lifecycle';
import TimerWithCleanup from './TimerWithCleanup';
import SyncedInputs from './SyncedInputs';

function App() {
  //visible이 true이면 Counter컴포넌트가 마운트되고, false면 언마운트 된다.
  const [visible, setVisible] = useState(true)
  return (
    <div className="App">
      <h1>App</h1>
      <input type='checkbox' checked={visible}
        style={{height: "20px", width: "20px"}} 
        onChange={e => setVisible(e.target.checked)}
      />
      {/*visible이 true이면 Counter컴포넌트를 마운트하고(요소를 보이게함), false면 null을 반환하여 Counter컴포넌트를 언마운트함*/}
      {visible ? <Counter /> : null}
      <Timer/>
      <Lifecycle/>
      {visible ? <TimerWithCleanup /> : null}
      <SyncedInputs/>
    </div>
  );
}

export default App;
