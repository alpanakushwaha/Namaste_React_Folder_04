import { restaurantObject } from "../utils/restaurantObject";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const searchText1 = "asdf";
  const [searchText, setSearchText] = useState(searchText1);
  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <h1>{searchText}</h1>
        <h1>{searchClicked}</h1>
        <button
          className="serach-btn"
          onClick={() => {
            if (searchClicked == "false") setSearchClicked("true");
            else setSearchClicked("false");
          }}
        >
          Search
        </button>
      </div>

      <div className="body_container">
        {restaurantObject.map((reabcdstau) => {
          return (
            <RestaurantCard {...reabcdstau.data} key={reabcdstau.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
