import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = (
  <h3 className="header3" key="keyOne">
    React header using JSX
  </h3> // JSX-EXpression
);

console.log(heading3);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading3);
