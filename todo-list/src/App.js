import TodoContainer from "./components/TodoContainer";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useRef, useCallback } from "react";

//데이터를 2500개 생성해서 반환하는 함수
function createBulkTodos(){
  const array = []
  for(let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false
    })
  }
  return array;
}


function App() {
  //todoListItem에 들어갈 데이터 배열(생성한 2500개의 데이터를 todos에 추가)
  const [todos, setTodos]  = useState(createBulkTodos)

  //새로운 객체를 만들때마다 id값을 1씩 더해주어야 하므로 useRef훅을 사용하여 관리한다.
  //다음에 추가할 객체의 id값은 '4'이므로 초기값을 '4'로 전달
  const nextId = useRef(4);

  //아래 TodoInput에서 입력한 값을 파라미터(text)로 전달받아서 todos배열에 추가하는 함수
  const onInput = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    setTodos(todos => todos.concat(todo))  //새 객체를 todos에 추가
    nextId.current += 1;  //nextId를 1 증가
  }, [])

  //app컴포넌트에서 id를 파라미터로 가져온다
  const onRemove = useCallback(id => {
    //id값이 일치하지 않는 배열 요소만 새로운 배열로 생성하여 todos에 다시 할당한다.
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  //
  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo => 
        //todo.id와 해당 리스트의 id가 일치하면 checked값을 반전해서 할당
        //만약 일치하지 않으면 리스트 아이템을 그대로 할당한다.
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    )
  }, [])

  return (
    //TodoInput컴포넌트를 TodoContainer의 자식 컴포넌트로 전달
    <TodoContainer>
      {/* todos배열에 새로운 객체를 추가하는 함수를 TodoInput으로 전달 */}
      <TodoInput onInput={onInput}/>
      {/* todos 상태배열을 TodoList컴포넌트의 props로 전달 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> {/* onRemove함수 호출 */}
    </TodoContainer>
  );
}

export default App;
