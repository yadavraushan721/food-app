import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //! HOOKS :  useState variable -------------------------------------------------
  //Local state variable :  super powerful variable
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList); // working on mock data

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  //! useEffect-------------------------------------------------------------------

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log("API DATA : ", json); // live swiggy api data
    // console.log("CARDS:", json?.data?.cards);  // restaurant cards

    //! Optional chaining
    const restaurants = json?.data?.cards
      ?.map(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      )
      ?.filter(Boolean)[0];

    // console.log("RESTAURANTS:", restaurants);
    //! here updating both of the state variable
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants); // during filtering instead of modifying the listOfRestaurnat , modify the filteredRestaurant
  };

  //! conditional rendering-----------------------------------------
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the ui
              // SearchText

              // every time filtered from the listOfRestaurant
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()),
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here for show top rated restaurant
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            // console.log(listOfRestaurant);
            setFilteredRestaurant(filteredList); // useState method : rerender and modified component
            console.log("Button clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {
          // whenever rendering rendring through filteredRestaurant
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
