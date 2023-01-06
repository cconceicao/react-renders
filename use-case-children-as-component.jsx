/*
React components re-render themselves and all their children when the state is updated.
On every mouse click the state of ClickableComponent is updated, its re-render is triggered, and so, ChildComponent will re-render as well.
*/
import React, { useState } from "react";

export const ChildComponent = () => {
  console.log("Children re-render.");
  return <div>Children</div>;
};

const ClickableComponent = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div onClick={() => setCounter(counter++)}>
      Counter: {counter}
      <ChildComponent />
    </div>
  );
};
