/*
Solution 1: extract ChildComponent outside and pass it as children.
- The <ChildComponent/> element is created in <AnotherComponent/>, it "belongs" to <AnotherComponent />.
- When <ClickableComponent/> re-renders because of its state change, its props stay the same.
- So, any element that comes from props will not be re-created, so <ChildComponent/> will not be re-rendered on every mouse click.
*/

import React, { useState } from "react";

const ClickableComponent = ({ children }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div onClick={() => setCounter(counter++)}>
      Counter: {counter}
      {children}
    </div>
  );
};

// Usage
const AnotherComponent = () => {
  return (
    <ClickableComponent>
      <ChildComponent />
    </ClickableComponent>
  );
};
