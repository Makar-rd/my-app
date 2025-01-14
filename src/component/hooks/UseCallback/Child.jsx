import React from "react";

const Child = ({ sayHello }) => {
  console.log("🔄Child перерисовался!");
  return <button onClick={sayHello}>Сказать привет</button>;
};

export default Child;

// import { memo } from "react";

// const Child = ({ sayHello }) => {
//   console.log("🔄 Child перерисовался!");
//   return <button onClick={sayHello}>Сказать привет</button>;
// };

// export default memo(Child);
