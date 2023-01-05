import { useState } from "react";

export const Children = () => {
  console.log("Children re-render.");
  return <div>Children</div>;
};

export const ParentOne = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="case">
      Counter: {counter}
      <Children />
    </div>
  );
};
