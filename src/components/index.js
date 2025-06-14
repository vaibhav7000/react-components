// React makes the frontend development / creation of the websites easy and efficient by calculating the differenece between the previous state (DOM) and latest state(virtual DOM). Then after calculating the difference ReactDOM based on these difference only updated the those parts of DOM whwew vritual DOM is updates.

// React should only be used to create dynamic websites, because its major goal is to make the DOM manipulation easy and efficient.

// React provides a new sytnax to create websites / frontend application that at the end compiles down back into html, css and js.

// DOM is api that is provided by the browser that represent the html content in the website, using this we can update the website content / appearence without reloading the page again.

// when doing the DOM manipulation, we always change the previous state with new state but this is hard and expensice task => React comes into the picture, we have to provide only the updated state to react and based on that React will update the DOM

// At the end React is used to create frontend application / websites but with a new syntax (kind of writing HTML using JS) and inherits all the logic of DOM-manipulation, so the developer only have to pass the update state to react.

// React maintains 1. virtual DOM and 2. realDOM
// virtual DOM is the light weight copy of the actual dom (in memory), when there is any change to state react creates a new Virtual DOM, compares that with the in-memory DOM and if there is any difference (diffing) than updates only those parts of the actual DOM those are updated

// React Jargons 1. State (any data / content that gets change over time (dynamic) will be called state in React terms), 2. Component (building block of the website, these are JS functions that throws JS + XML (HTML)) 3. re-rendering (refreshing the page so that state can be updated) re-rendering always happens whenever there will be state change
