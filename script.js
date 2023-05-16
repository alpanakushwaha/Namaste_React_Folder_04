import React from "react";
import ReactDOM from "react-dom/client";

// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerHTML= "Namaste React, Namaste World!!!!🚀✨";
// root.appendChild(heading);

const heading2 = React.createElement(
  "h2",
  { title: "titleOne", key: "key1" },
  " Namaste EVERYONE!!! 🚀✨ "
);
const heading3 = (
  <h3 className="header3" key="keyOne">
    React header using JSX
  </h3>
);
const container = React.createElement(
  "div",
  { title: "container", className: "container" },
  [heading2, heading3]
);
console.log(heading2);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
