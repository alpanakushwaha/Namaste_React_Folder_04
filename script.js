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


const config=[
  {
    type:"carousel",
    cards:[
      {
        offerName:"50% off"
      },
      {
        offerName:"no delivery charge"
      }
    ]
  },
  {
    type:"restaurants",
    cards:[
      {
        image:
        "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
      restaurant_name: "NH7 Refuel",
      cuisine: ["North Indian", "Chinese"],
      avgRatings: "3.8 *",
      },
      {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "NH7 different refuel",
    cuisine: ["south Indian", "Chinese"],
    avgRatings: "4.8 *",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "mcDonals",
    cuisine: ["Fast food"],
    avgRatings: "4.5 *",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "khana khazana",
    cuisine: ["Indian", "Italian"],
    avgRatings: "4.0 *",
  },
    
    ]
  },
]



// making restaurant-Onject
const restaurantObject = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "NH7 Refuel",
    cuisine: ["North Indian", "Chinese"],
    avgRatings: "3.8 *",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "NH7 different refuel",
    cuisine: ["south Indian", "Chinese"],
    avgRatings: "4.8 *",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "mcDonals",
    cuisine: ["Fast food"],
    avgRatings: "4.5 *",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18431383/741771d5ea7c29186a908227bd846db7.jpeg",
    restaurant_name: "khana khazana",
    cuisine: ["Indian", "Italian"],
    avgRatings: "4.0 *",
  },
];

const RestaurantCard = () => {
  // component using restaurantObject data
  return (
    <>
      <div className="card">
        
        <img src={restaurantObject?.[0]?.image}></img>
        <h2>{restaurantObject?.[0]?.restaurant_name}</h2>
        <h3>{restaurantObject?.[0]?.cuisine.join(", ")}</h3>
        <h2>{restaurantObject?.[0]?.avgRatings}</h2>
      </div>
      <div className="card">
        <img src={restaurantObject?.[1]?.image}></img>
        <h2>{restaurantObject?.[1]?.restaurant_name}</h2>
        <h3>{restaurantObject?.[1]?.cuisine.join(", ")}</h3>
        <h2>{restaurantObject?.[1]?.avgRatings}</h2>
      </div>
      <div className="card">
        <img src={restaurantObject?.[2]?.image}></img>
        <h2>{restaurantObject?.[2]?.restaurant_name}</h2>
        <h3>{restaurantObject?.[2]?.cuisine.join(", ")}</h3>
        <h2>{restaurantObject?.[2]?.avgRatings}</h2>
      </div>
      <div className="card">
        <img src={restaurantObject?.[3]?.image}></img>
        <h2>{restaurantObject?.[3]?.restaurant_name}</h2>
        <h3>{restaurantObject?.[3]?.cuisine.join(", ")}</h3>
        <h2>{restaurantObject?.[3]?.avgRatings}</h2>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body_container">
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
