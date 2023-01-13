# React re-renders

There are 2 main stages to care about when talking about React performance:
1. React initial render happens when a component first appears on the screen.
2. React re-render is the second and any consecutive render of a component that is already on the screen.

## When does re-render happen?
When React needs to update the app with some new data, usually, 1) as a result of a user interacting with the app or 2) some external data coming through via an asynchronous request or some subscription model.

## Necessary vs unnecessary re-render
**Necessary re-render**: re-render of a component that is the source of the changes, or a component that directly uses the new information.

**Unnecessary re-render**: re-render of a component that is propagated through the app via different re-renders mechanisms due to either mistake or inefficient app architecture.
Unnecessary re-renders by themselves are not a problem but if they happen too often and/or on very heavy components, this could lead to 1) user experience appearing “laggy”, 2) visible delays on every interaction, or 3) the app becoming completely unresponsive.

## Re-renders reasons
1. [State changes](https://github.com/cconceicao/react-renders/blob/main/re-renders/re-render-state-changes.jsx)
2. [Parent re-renders](https://github.com/cconceicao/react-renders/blob/main/re-renders/parent-re-renders.jsx)
3. [Context changes](https://github.com/cconceicao/react-renders/blob/main/re-renders/re-render-context-changes.jsx)
4. [Hooks changes](https://github.com/cconceicao/react-renders/blob/main/re-renders/re-render-hooks-changes.jsx)

# Sources
["React re-renders guide: everything, all at once" from Nadia Makarevich](https://www.developerway.com/posts/react-re-renders-guide)