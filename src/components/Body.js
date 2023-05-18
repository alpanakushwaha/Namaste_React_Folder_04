import { restaurantObject } from "../utils/restaurantObject";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <>
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
