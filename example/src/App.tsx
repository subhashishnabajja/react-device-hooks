import React from "react";

import { useLocalStorage } from "react-device-hooks";

const App = () => {
  const [count, setCount, resetStorage] = useLocalStorage(0, "hello");
  return (
    <>
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <button onClick={() => resetStorage()}>Clear storage</button>
    </>
  );
};
export default App;
