import React, { FC, useState } from "react";
import Btn from "./Button";

const App: FC = () => {
  const [count, setCount] = useState(0);

  let clickPlus = () => {
    setCount(count + 1);
  };

  let clickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="text-6xl pb-60 text-center mt-60">{count}</h1>
      <div className="text-center -my-40 mr-20">
        <Btn
          text="-"
          class="w-20 h-20 bg-gray-500 mx-20 text-3xl rounded-lg active:bg-gray-700 transition"
          func={clickMinus}
        />
        <Btn
          text="+"
          class="w-20 h-20 bg-gray-500 text-3xl rounded-lg active:bg-gray-700 transition"
          func={clickPlus}
        />
      </div>
    </div>
  );
};

export default App;
