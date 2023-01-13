# React re-renders

There are 2 main stages to care about when talking about React performance:
1. React initial render happens when a component first appears on the screen.
2. React re-render is the second and any consecutive render of a component that is already on the screen.

When does re-render happen?
When React needs to update the app with some new data, usually, 1) as a result of a user interacting with the app or 2) some external data coming through via an asynchronous request or some subscription model.

## React children
- children is a prop
- children can be Elements, Functions, or Components:
````
//as prop
<Parent children={() => <Child />} />

// OR
<Parent>
  {() => <Child />}
</Parent>
// implementatio
const Parent = ({ children }) => {
  return <>{children()}</>
}

// OR
<Parent children={Child} />;
const Parent = ({ children: Child }) => {
  return <>{<Child />}</>;
};
````

## React Element
- immutable objects
- ``const child = <Child />``, Child is an element, which is syntax sugar for a function React.createElement that returns an object. We could write this way: ``const child = React.createElement(Child, null, null);``
- it is an object which is just a description of the things we want to see on the screen when this element ends up in the render tree
- the child constant is just a constant that contains an object that just sits there idly
- the ``Child`` component will be rendered when: 1) we include the ``child``constant in the return result, and 2) after the Parent component renders itself

### Updating React Elements
- to updated them, and so, to trigger its correspondent component re-render, we have to re-create an object (what happens during re-renders)

Example
````
const Parent = () => {
  // child definition object will be re-created.
  // so Child component will be re-rendered when Parent re-renders
  const child = <Child />;

  return <div>{child}</div>;
};
````
- when the parent re-renders, the content of the ``child`` constant will be re-created
- ``child`` is a new Element, from React perspective
- React will just update the existing component with the new data (re-render the existing Child)
- we can avoid this with memoization: the definition object will not be re-created, React will think that it doesn’t need updating, and Child’s re-render won’t happen
````
// use React.memo
const ChildMemo = React.memo(Child);
const Parent = () => {
  const child = <ChildMemo />;
  return <div>{child}</div>;
};
// or memoize the result of the function call
const Parent = () => {
  const child = useMemo(() => <Child />, []);
  return <div>{child}</div>;
};
````



# Sources
[The great article "The mystery of React Element, children, parents and re-renders" from Nadia Makarevich](https://www.developerway.com/posts/react-elements-children-parents)
