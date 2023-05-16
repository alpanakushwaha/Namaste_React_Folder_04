import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
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
var xyz = 100;

const api = {
  
  name: "firstAPI",
  data: { dataOne: "valueOne", dataTwo: "valueTwo", dataThree: "valueThree" },
};
const str1 = "this is a string";
const HeaderComponent = () => {
  return (
    <>
      {7 + 8745}
      {<br />}

      {str1}
      {console.log(xyz)}
      {console.log(7634 + 54)}
      {<br />}

      {console.log("Any Javascript Code here")}
      {"Any Javascript Code here"}

      {componentOne}
      <ComponentTwo />
      {ComponentTwo()}
      <h1>this is just header Component</h1>
      <h1>this is header Component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading3);
// root.render(<HeaderComponent />);

// root.render(componentOne);
root.render(<HeaderComponent />);
