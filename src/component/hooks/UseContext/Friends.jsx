import React, { useContext } from "react";
import TvContext from "./TvContext";

const Friends = () => {
  const { channel, setChannel } = useContext(TvContext);

  return (
    <div>
      <p>Сейчас включён канал: {channel}</p>
      <button onClick={() => setChannel("Discovery")}>
        Переключить на Discovery
      </button>
    </div>
  );
};

export default Friends;
