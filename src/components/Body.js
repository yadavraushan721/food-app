import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

/**
 * 🚀 Final Answer (Short & Precise)
 * ✅ listOfRestaurant → updated once (after API), then treated as immutable
 * ✅ filteredRestaurant → updated multiple times
 *❗ But updates are NOT based on previous filteredRestaurant
 * ✅ They are always recomputed from listOfRestaurant
 * 
 * Never filter on filteredRestaurant
   Always filter on listOfRestaurant
 */

const Body = () => {
  //! HOOKS :  useState variable -------------------------------------------------
  //Local state variable :  super powerful variable
  // const [listOfRestaurant, setListOfRestaurant] = useState(resList); // working on mock data

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // whenever state variable update, react triggers a reconcilliation cycle (re-render the component)
  console.log("Body Rendered");

  //! useEffect-------------------------------------------------------------------

  useEffect(() => {
    // console.log("useEffect Called : BODY");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    // https://corsproxy.io/?

    const json = await data.json();
    // console.log("API DATA : ", json); // live swiggy api data
    // console.log("CARDS:", json?.data?.cards);  // restaurant cards

    //? destructuring the live api data
    //  console.log(
    //   "rest data",
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    // );
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
