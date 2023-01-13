/*
State inside hook update -> "host" component re-render
If hook uses Context and its value changes -> "host" component re-render
*/

import React, { useState, createContext, useContext, useMemo } from "react";

const Context = createContext({ value: 1 });

const Provider = ({ children }) => {
  const [state, setState] = useState(1);

  const onClick = () => setState(state + 1);

  const value = useMemo(
    () => ({ value: state }),
    [state]
  );

  return (
    <Context.Provider value={value}>
      <button onClick={onClick}>click here</button>
      {children}
    </Context.Provider>
  );
};

const useValue = () => useContext(Context);

const useSomething = () => {
  useValue();
  return null;
};

const Child = () => {
  const something = useSomething();
  console.log("Child re-renders: ", something);
  return <></>;
};

const App = () => {
  return (
    <Provider>
      <Child />
    </Provider>
  );
};

export default App;