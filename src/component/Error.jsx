import React, { useState, useEffect } from "react";

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

const NumberAndScroll = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState(window.scrollY);
  console.log("num", number);
  console.log("skrol", scroll);

  const handleSkroll = () => throttle(() => setScroll(window.scrollY), 37); //для задержки

  useEffect(() => {
    fetchRandomNumber().then(setNumber);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleSkroll);

    return () => window.removeEventListener("scroll", handleSkroll);
  }, []);

  return (
    <div>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};

export default NumberAndScroll;
