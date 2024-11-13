import {useState} from 'react'

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      {/*버튼을 클릭하면 isOn상태를 반전시킴 */}
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      <p>Switch is {isOn ? "On" : "Off"}</p>
    </div>
  )
}

export default ToggleSwitch