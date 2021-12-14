import Button from "./button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("리랜더링");
  const iRunOnlyOnce = () => {
    console.log("최초의 한번만 랜더링");
  };
  useEffect(iRunOnlyOnce, []); //useEffect((함수),[값]) : API를 딱 한번만 호출하고 그 뒤로는 다시는 호출하기 싫은 경우 값이 변경이 랜더링
  useEffect(() => {
    console.log("키워드 입력시 랜더링");
  }, [keyword]);
  useEffect(() => {
    console.log("카운터 시 랜더링");
  }, [counter]);
  useEffect(() => {
    console.log("카운터 또는 키워드 입력 시 랜더링 ");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"continue"} />
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
//npm start
