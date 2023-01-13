/*
Component’s parent renders -> Component re-renders itself
Or, in other words:
Component re-renders -> Component's children also re-render
*/

import React, { useState } from "react";

const Child = () => {
  console.log("Child re-renders");
  return <></>;
};

const App = () => {
  const [state, setState] = useState(1);
  const onClick = () => setState(state + 1);

  return (
    <>
      <button onClick={onClick}>click here</button>
      <Child />
    </>
  );
};

export default App;