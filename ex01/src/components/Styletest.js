
const Styletest = () => {

  const s = {color: "red", fontSize:"20px"}

  return (
    <>
      {/*react에서는 class를 className으로 적용*/}
      <p className="blue">hello world</p>
      <p className="green">안녕하세요</p>
      {/*인라이 서식 : {}로 두번묶어 값을 객체로 전달 */}
      <p style={{color:"pink", fontSize:"20px"}}>인라인 서식</p>
      {/*s라는 변수를 생성하여 스타일을 전달*/}
      <p style={s}>변수로 스타일 전달</p>
    </>
  )
}

export default Styletest