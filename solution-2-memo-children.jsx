/*
Solution 2: memoize the child component
- The <ClickableComponent/> still has a children prop which will be memoized, so its value
will be preserved between re-renders
- <ClickableComponent/> is not memoized, so it will re-render
- But, when React reaches the "children" part, will check that the deefinition of <ChildComponentMemo/>
hasnot changed, so it skips that part and does not re-render it.
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

const ChildComponentMemo = React.memo(ChildComponent);

// Usage
const AnotherComponent_A = () => {
  return (
    <ClickableComponent>
      <ChildComponentmemo />
    </ClickableComponent>
  )
}
// OR
const AnotherComponent_B = () => {
  return <ClickableComponentMemo children={<ChildComponent />} />;
}
