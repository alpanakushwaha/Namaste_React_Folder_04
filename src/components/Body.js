import { restaurantObject } from "../utils/restaurantObject";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// what is state?
// what is react hooks?
// what is useState?

function filterData(searchText, restaurant1) {
  const filterData = restaurant1.filter((restaurant2) =>
    restaurant2.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant1, setRestaurant1] = useState(restaurantObject);

  
  return (
    <>
      <div className="search-container">   // 1st rendering
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="serach-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurant1);
            // update the state- restaurant1
            setRestaurant1(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="body_container">  // 2nd rendering
        {restaurant1.map((reabcdstau) => {
          return (
            <RestaurantCard {...reabcdstau.data} key={reabcdstau.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
