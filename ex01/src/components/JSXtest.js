import React from 'react'

const JSXtest = () => {
  let persons = [
    {name: "홍길동", age: 16},
    {name: "임꺽정", age: 19},
    {name: "전우치", age: 20}
  ];

  //React.createElement(element, attribute, child)
  // let td1 = <td>이름</td>;
  // let td2 = <td>나이</td>
  // let tr = React.createElement("tr", null, td1, td2);
  // let tr = <tr><td>이름</td><td>나이</td></tr>
  // let trlist = [tr];

  // for (let person of persons){
  //   // td1 = <td>{person.name}</td>
  //   // td2 = <td>{person.age}</td>
  //   // tr = React.createElement("tr", null, td1, td2);
  //   tr = <tr><td>{person.name}</td><td>{person.age}</td></tr>
  //   trlist.push(tr);//trlist배열에 생성한 tr을 할당
  // }

  let trlist = persons.map(person => <tr><td>{person.name}</td><td>{person.age}</td></tr>)
  
  return (
    <>{/*React.Fragment사용 */}
      <h1>제목</h1>
      <table>
        <tr><td>이름</td><td>나이</td></tr>
        {trlist}
      </table>
      <hr/>
    </>
  )
}

export default JSXtest