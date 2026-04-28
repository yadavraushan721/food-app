import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5920703&lng=77.30300489999999&restaurantId=314445&catalog_qa=undefined&submitAction=ENTER",
    );

    console.log(data.status);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div>
      <h1>Name of RestaurantCard</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
