import { useEffect, useState } from "react";
import menuData from "../utils/mockData.json";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  // async function fetchMenu() {
  //   try {
  //     const data = await fetch(
  //       MENU_URL + 608589 + "&isMenuUx4=true&submitAction=ENTER",
  //     );
  //     // MENU_URL + 608589 + "&isMenuUx4=true&submitAction=ENTER",

  //     //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5920703&lng=77.30300489999999&restaurantId=608589&catalog_qa=undefined&submitAction=ENTER

  //     const json = await data.json();
  //     console.log(json);
  //     // setResInfo(json.data);
  //   } catch (error) {
  //     console.log("Failed to fetch the restaurant data:", error);
  //   }
  // }

  async function fetchMenu() {
    console.log(menuData);
    setRestInfo(menuData.data);
  }

  // cards array
  // const { cards = [] } = resInfo || {};

  if (resInfo === null) return <Shimmer />;

  const cards = resInfo?.cards;

  // restaurant info destructuring
  const { name, cuisines, costForTwoMessage } = cards?.[2]?.card?.card?.info;

  // Menu Cards

  // Item Cards
  const itemCards =
    cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
      ?.itemCards;
  // console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>

      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}-{"  Rs."}
            {item?.card?.info?.defaultPrice || item?.card?.info?.defaultPrice}
          </li>
        ))}
        {/* {itemCards[0]?.card?.info?.name} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
