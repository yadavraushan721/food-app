import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0QRmwqK0zRQzxSpCwLmfisreEt3UckWKIMQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine } = props; // destructuring 
  console.log(props);

  return (
    <div className="res-card">
      <img
        style={{ backgroundColor: "#f0f0f" }}
        className="res-logo"
        alt="food-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/16/3099d90c-d71c-4bda-ba7c-05d4f8996f56_944228.JPG"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.5 Star</h4>
      <h4>38 Minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Food"
          cuisine="Biryani, North Indian..."
        />
        <RestaurantCard resName="KFC" cuisine="Burger,Fast food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
