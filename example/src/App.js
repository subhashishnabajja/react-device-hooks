import React from "react";

import { useScreen } from "react-device-hooks";

const App = () => {
  const { width, height, orientation } = useScreen();
  return (
    <div className='container'>
      <h1>Device width = {width}</h1>
      <h1>Device height = {height}</h1>
      <h1>Device orientation = {orientation}</h1>
    </div>
  );
};
export default App;
