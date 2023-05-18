import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <>
      <div className="card">
        <img src={CDN_URL + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h2>{avgRating}</h2>
      </div>
    </>
  );
};
export default RestaurantCard;
