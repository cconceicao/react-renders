/*
Component’s state changes -> re-render itself
*/

import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(1);
  const onClick = () => setState(state + 1);

  console.log("Re-render number: ", state);

  return <button onClick={onClick}>click here</button>;
};

export default App;