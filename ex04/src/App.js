import './App.css';
import { useState } from 'react';
import GroupComponent from './GroupComponent';

function App() {
  console.log('App 호출됨')
  const [value, setValue] = useState(0);

  const [arr, setArr] = useState([0, 0]);
  const increaseAt = (index) => {
    arr[index] = arr[index] + 1;
    setArr([...arr]);
  };

  return (
    <div className="box">
      <h1>App</h1>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
      <GroupComponent />

      <p>{arr.join(", ")}</p>
      <button onClick={() => increaseAt(0)} >a[0]++</button>
      <button onClick={() => increaseAt(1)} >a[1]++</button>
    </div>
  );
}

export default App;
