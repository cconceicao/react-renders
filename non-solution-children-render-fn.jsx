/*
Non solution: pass children as a render function
- The <ChildComponent/> will still re-render
- Children are a function
- The Element is the result of calling that function
- Because we call that function inside <ClickableComponent/>, we'll call it on every re-render
- Thus, on every re-render, well create the definition object <ChildComponent/>, which will
trigger its re-render
*/

import React, { useState } from "react";

export const ChildComponent = () => {
  console.log("Children re-render.");
  return <div>Children</div>;
};

const ClickableComponent = ({ children }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div onClick={() => setCounter(counter++)}>
      Counter: {counter}
      {children()}
    </div>
  );
};

// Usage
const AnotherComponent = () => {
  return (
    <ClickableComponent>
      {() => <ChildComponent />}
    </ClickableComponent>
  )
}
