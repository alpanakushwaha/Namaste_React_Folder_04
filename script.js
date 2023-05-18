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

// making restaurant-Onject
const restaurantObject = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "533773",
      name: "Third Wave Coffee",
      uuid: "19dff2cd-d21d-4cac-9c26-4580e0c61346",
      city: "1",
      area: "Ashok Nagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
      cuisines: ["Beverages", "Bakery", "Continental"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "third-wave-coffee-central-bangalore-central-bangalore",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "hird Wave Coffee, Corporation No.13, Old No.4/1, Ground Floor, Lavelle Road Junction, Walton Road, Bangalore, Shanthinagara , B.B.M.P East, Karnataka-560001",
      locality: "Lavelle Road",
      parentId: 274773,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6790144~p=19~eid=00000188-2cf6-9686-594a-e64a0082132e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "533773",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "47385",
      name: "Priyadarshini Grand",
      uuid: "cbca89ad-df12-4303-a7d2-baadc5700ff8",
      city: "1",
      area: "Basaveshwara Nagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "c9elzh8awx7jcx70cood",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chaat",
        "Chinese",
        "Beverages",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 7.5,
      slugs: {
        restaurant: "priyadarshini-grand-basaveshwaranagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "315, Siddhaiah Puranik Road, Basaveshwara Nagar, Bangalore - 560020",
      locality: "Siddhaiah Puranik Road",
      parentId: 9727,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5700,
        message: "",
        title: "Delivery Charge",
        amount: "5700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "47385",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 7.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "2415",
      name: "Veena Stores",
      uuid: "450ddba7-89d1-4317-91a9-d3e559f56587",
      city: "1",
      area: "Malleshwaram",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "vt1mquaxmeugaf9dl5pp",
      cuisines: ["South Indian"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 5.800000190734863,
      slugs: {
        restaurant: "veena-stores-malleshwaram",
        city: "bangalore",
      },
      cityState: "1",
      address: "#187, 15th Cross, Margosa Road, Malleshwaram",
      locality: "Margosa Road",
      parentId: 20940,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4500,
        message: "",
        title: "Delivery Charge",
        amount: "4500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "2415",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 5.800000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "639122",
      name: "Namaste",
      uuid: "61f2866f-4b1e-497b-925a-0f8578f4c64a",
      city: "1",
      area: "Malleshwaram",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "n7a1waemytumnm8t0pkd",
      cuisines: [
        "South Indian",
        "Thalis",
        "Snacks",
        "Biryani",
        "Indian",
        "Chinese",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "namaste-malleshwaram-malleshwaram",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "501, Ground Floor, Lakke Gowda Mansion, Sampige Road, Malleshwaram -560003",
      locality: "Sampige Road",
      parentId: 366271,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4500,
        message: "",
        title: "Delivery Charge",
        amount: "4500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "639122",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = (properties) => {
  console.log(properties);

  return (
    <>
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            properties?.restaurent?.data?.cloudinaryImageId
          }
        ></img>
        <h2>{properties?.restaurent?.data?.name}</h2>
        <h3>{properties?.restaurent?.data?.cuisines.join(", ")}</h3>
        <h2>{properties?.restaurent?.data?.avgRating}</h2>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body_container">
        <RestaurantCard restaurent={restaurantObject[0]} />
        <RestaurantCard restaurent={restaurantObject[1]} />
        <RestaurantCard restaurent={restaurantObject[2]} />
        <RestaurantCard restaurent={restaurantObject[3]} />
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
