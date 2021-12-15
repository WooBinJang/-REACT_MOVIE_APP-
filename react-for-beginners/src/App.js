import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); //state는 직접적으로 수정 불가능 함수를 가져와서 수정
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          //map의 첫 번째 argument는 값이고 두번째는 index
          toDos.map((toDo, index) => (
            <li key={index}>{toDo}</li>
          ))
          //리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
        }
      </ul>
    </div>
  );
}

export default App;
//npm start
