import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
    // 컴포넌트가 파괴될 때도 함수를 실행하고 싶으면
    // useEffect 함수가 새로운 함수를 return
  }, []);
  return <h1>Hello</h1>;
}
// dependency가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 실행되는데
// 그 과정이 리렌더링으로 useEffect함수가 실행되고 클린업하면서
// 이전에 있던 이펙트인 console.log(“hi")가 삭제되고
// 새로운 이펙트 함수인 return 함수가 실행

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
//npm start
