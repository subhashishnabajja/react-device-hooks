import React from "react";

import { useScreen } from "react-device-hooks";

const App = () => {
  const { width, height, orientation } = useScreen();
  return (
    <div>
      <p>Device width = {width}</p>
      <p>Device height = {height}</p>
      <p>Device orientation = {orientation}</p>
    </div>
  );
};
export default App;
