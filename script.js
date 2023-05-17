import React from "react";
import ReactDOM from "react-dom/client";
const title = (
  <h3 className="header3" key="keyOne">
    Food Villa!!
  </h3>
);

const HeaderComponent = () => {
  return (
    <>
      {title}
      {ComponentTwo()}
      <h1>this is just header Component</h1>
    </>
  );
};

const ComponentTwo = () => {
  return <h1>this is another Component</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
