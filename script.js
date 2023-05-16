import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = (
  <h3 className="header3" key="keyOne">
    React header using JSX
  </h3> // JSX-EXpression
);

// functional Component

const componentOne = <h1>this is Component One </h1>;
const ComponentTwo = () => {
  return <h1>this is another Component</h1>;
};
const HeaderComponent = () => {
  return (
    <>
      {componentOne}
      <ComponentTwo />
      <h1>this is just header Component</h1>
      <h1>this is header Component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading3);
// root.render(<HeaderComponent />);

root.render(componentOne);
// root.render(<HeaderComponent />);
