import React, { useState } from "react";
import TvContext from "./TvContext";

const TvProvider = ({ children }) => {
  const [channel, setChannel] = useState("какой-то канал");

  return (
    <TvContext.Provider value={{ channel, setChannel }}>
      {children}
    </TvContext.Provider>
  );
};

export default TvProvider;
