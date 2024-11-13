import {useState} from 'react'

const UserForm = () => {
  //상태 변수 및 설정 함수 정의
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('React');

  //폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();//submit을 막아줌
    //경고창을 띄움
    alert(`Name: ${name}\nAge: ${age}\nLanguage: ${language}`)
  }

  return (
    //전송버튼(submit)을 누르면 handleSubmit함수가 호출됨
    <form onSubmit={handleSubmit}
      style={{maxWidth:'400px', margin:'auto', outline:'1px solid red'}}
    >
      <h1>입력폼</h1>
      <div style={{marginBottom:'1em'}}>
        <label htmlFor="name">이름: </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div style={{marginBottom:'1em'}}>
        <label htmlFor="age">나이: </label>
        <input
          type='number'
          id='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className='control'>
        <label>
          <input type='radio' name='gender' 
            onChange={() => setGender('남성')}
            checked={gender === '남성'}
          />
          <span>남성</span>
        </label>
        <label>
          <input type='radio' name='gender' 
            onChange={() => setGender('여성')}
            checked={gender === '여성'}
          />
          <span>여성</span>
        </label>
      </div>
      <div style={{marginBottom:'10px'}}>
        <label htmlFor="language">프로그래밍 언어: </label>
        <select
          id='language'
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
      </div>
      <button type='submit'>전송</button>
      <hr/>
      <h1>입력된 값</h1>
      <div className='control'>이름 : {name}</div>
      <div className='control'>나이 : {age}</div>
      <div className='control'>성별 : {gender}</div>
      <div className='control'>선택과목 : {language}</div>
    </form>
  )
}

export default UserForm