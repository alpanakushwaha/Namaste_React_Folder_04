import React from "react";
import ReactDOM from "react-dom/client";
const title = (
  <h3 className="header3" key="keyOne">
    {" "}
    <a href="#anythingLikeClose">
      <img
        src="https://www.ujudebug.com/wp-content/uploads/2020/05/Screenshot_6-560x480.png"
        className="image_fooVilla"
        alt="image_foodVilla"
      ></img>
    </a>
  </h3>
);

const NavigationBar = () => {
  return (
    <>
      <div className="nav-itms ">
        <ul>
          <li>Nav-itemOne </li>
          <li>Nav-itemTwo </li>
          <li>Nav-itemThree </li>
          <li>Nav-Cart </li>
        </ul>
      </div>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        {title}
        <NavigationBar />
      </div>
    </>
  );
};

const styleObj = {
  backgroundColor: "blue",
};

const jsxCode = (
  <div style={styleObj}>
    <h3 style={{ color: "red", fontSize: "30px" }}>header three</h3>
    <h3>second header three</h3>
  </div>
);

const Body = () => {
  return (
    <>
      {jsxCode}
      <h3 className="body_container">Body</h3>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <h3 className="footer_container">Footer</h3>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
