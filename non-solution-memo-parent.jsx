/*
Non solution: memoize the parent component
- <ClickableComponentMemo/> is memoized
- It still has a children prop which accepts an Element
- We re-create this object on every re-render, so the memoized component will
do the props check
- It will detect that the props changed and will trigger the re-render of <ClickableComponentMemo/>
- Because <ChildComponent /> definition was re-created, it will be re-rendered too
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
      {children}
    </div>
  );
};

const ClickableComponentMemo = React.memo(ClickableComponent);

// Usage
const AnotherComponent_A = () => {
  return (
    <ClickableComponentMemo>
      <ChildComponent />
    </ClickableComponentMemo>
  )
}
// OR
const AnotherComponent_B = () => {
  return <ClickableComponentMemo children={<ChildComponent />} />;
}
