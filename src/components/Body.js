import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData"

const Body = () => {
  //Normal JS Variable
  // let listOfRestaurant = [
  //   {
  //     info: {
  //       id: "2345",
  //       name: "KFC",
  //       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
  //       locality: "Rautha Wada",
  //       costForTwo: "₹150 for two",
  //       cuisines: ["North Indian", "Biryani", "Tandoor"],
  //       avgRating: 4.3,
  //       sla: {
  //         deliveryTime: 37,
  //       },
  //     },
  //   },

  //   {
  //     info: {
  //       id: "23485",
  //       name: "Dominos",
  //       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
  //       locality: "Rautha Wada",
  //       costForTwo: "₹150 for two",
  //       cuisines: ["North Indian", "Biryani", "Tandoor"],
  //       avgRating: 3.3,
  //       sla: {
  //         deliveryTime: 37,
  //       },
  //     },
  //   },

  //   {
  //     info: {
  //       id: "23487",
  //       name: "MCD",
  //       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
  //       locality: "Rautha Wada",
  //       costForTwo: "₹150 for two",
  //       cuisines: ["North Indian", "Biryani", "Tandoor"],
  //       avgRating: 4.1,
  //       sla: {
  //         deliveryTime: 37,
  //       },
  //     },
  //   },
  // ];

  //! HOOKS :  useState variable
  //Local state variable :  super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here for show top rated restaurant
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            console.log(listOfRestaurant);

            setListOfRestaurant(filteredList); // useState method : rerender and modified component
            console.log("Button clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* <RestaurantCard
          resName="Meghana Food"
          cuisine="Biryani, North Indian..."
        /> */}

        {/* <RestaurantCard resData = {resList[0]}/> */}

        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}

        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
