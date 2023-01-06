/*
Non solution: pass children as a function and memoize it
- The <AnotherComponent/> triggers the re-render
- The <ClickableComponent/> re-renders because it's child of <AnotherComponent/> and it is not memoized
- When <ClickableComponent/> re-renders, it calls the render function
- This function is memoized, but its return value it is not
- As a consequence, on every re-render it will call <ChildComponent/> (will create a new definition object),
and so it will trigger the re-render if ChildComponent

See below solutions to this.
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
  const child = useCallback(() => <ChildComponent />, []);

  return <ClickableComponent>{child}</ClickableComponent>;
  // OR
  // return <ClickableComponent children={child} />;
}

/*
How to prevent the ChildComponent re-render?
1. We memoized the function as it is above and memoize the ClickableComponent with React.memo -> prevents
ClickableComponent to re-render and so the "children" function is not called
2. We remove memoization and wrap ChildComponent in React.memo -> ClickableComponent will re-render and
the "children" function will be called but its results will be memoized -> ChildComponent will not be
updated
*/
