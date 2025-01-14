import { useRef } from "react";

const ClickCounter = () => {
  const clickRef = useRef(0); // 📌 useRef сохраняет значение между рендерами

  const handleClick = () => {
    clickRef.current += 1; // ⬆ Увеличиваем значение (но компонент НЕ ререндерится)
    console.log(`Кнопка нажата ${clickRef.current} раз`);
  };

  return (
    <div>
      <p>Нажми на кнопку и смотри в консоль</p>
      <button onClick={handleClick}>Нажми меня</button>
    </div>
  );
};

export default ClickCounter;
