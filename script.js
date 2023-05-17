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

const Header = () => {
  return (
    <>
      <div className="header">
        {title}
        <NavigationBar />
      </div>
    </>
  );
};

const restaurantObject = {
  // making restaurant-Onject
  image:
    "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
  restaurant_name: "NH7 Refuel",
  cuisine: ["North Indian", "Chinese"],
  avgRatings: "3.8 *",
};

const RestaurantCard = () => {
  // component using restaurantObject data
  return (
    <div className="card">
      <img src={restaurantObject.image}></img>
      <h2>{restaurantObject.restaurant_name}</h2>
      <h3>{restaurantObject.cuisine.join(", ")}</h3>
      <h2>{restaurantObject.avgRatings}</h2>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="body_container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
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
      <>
        <Footer />
      </>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
