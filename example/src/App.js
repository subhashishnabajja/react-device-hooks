import React from "react";

import { useLocalStorage } from "react-device-hooks";

const App = () => {
  const [count, setCount] = useLocalStorage(0, "hello");
  return (
    <div className='container' onClick={() => setCount(count + 1)}>
      {count}
    </div>
  );
};
export default App;
