import { useState, useCallback } from "react";
import Child from "./Child";
const Parent = () => {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    // useCallback запоминает функцию, пока не изменятся зависимости
    console.log("Привет!");
  }, []);

  return (
    <div>
      <Child sayHello={sayHello} />{" "}
      <button onClick={() => setCount(count + 1)}>Увеличить {count}</button>
    </div>
  );
};

export default Parent;
