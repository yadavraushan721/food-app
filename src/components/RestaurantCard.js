import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    info: {
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: { deliveryTime },
      cloudinaryImageId,
    },
  } = resData;

  console.log(resData);
  return (
    <div className="res-card">
      <img
        style={{ backgroundColor: "#f0f0f" }}
        className="res-logo"
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",  ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
