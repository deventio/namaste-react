import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement.JS Object => HTMLElement(render)

//React Element

const elem = <span>React Element</span>;

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    {elem}
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading);

//React Component
//Class Based Component - OLD
//Functional Component - NEW

//React Functional Component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const jsxHeading2 = (
  <h1 className="head" tabIndex="1">
    {elem}
    Namaste React using JSX
    <HeadingComponent />
  </h1>
);

const number = 10000;
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {Title()}
    <HeadingComponent />
    <h2>{number}</h2>
    <h3>{100 + 200}</h3>
    <h3>{console.log(number)}</h3>
    {jsxHeading}
    <h1>Namaste React Functional Component2</h1>
  </div>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    {" "}
    Namaste React using JSX component
  </h1>
);

//js functions similar

const fn = () => true;

const fn2 = () => {
  return true;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent2 />);
