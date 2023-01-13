/*
Value of Context Provider changes -> all components using that Context re-render
*/

import React, { useState, createContext, useContext, useMemo } from "react";

const Context = createContext({ value: 1 });

const Provider = ({ children }) => {
  const [state, setState] = useState(1);

  const onClick = () =>  setState(state + 1);

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

const Child1 = () => {
  const { value } = useValue();
  console.log("Child1 re-renders: ", value);
  return <></>;
};

const Child2 = () => {
  const { value } = useValue();
  console.log("Child2 re-renders", value);
  return <></>;
};

const App = () => {
  return (
    <Provider>
      <Child1 />
      <Child2 />
    </Provider>
  );
};

export default App;