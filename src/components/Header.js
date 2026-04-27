import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtn] = useState("Login");
  // console.log("before return", btnNameReact);

  /***
   * 1. if no dependency array : useEffect called on every render
   *  2. if dependency array is empty : useEffect is called on initial render ( just once)
   *  3. if dependency array is [btnNameReact] : called everytime btnNameReact is updated
   *
   *  */
  useEffect(() => {
    console.log("useEffect called : HEADER");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              console.log("btn clicked");
              // console.log("onclick", btnNameReact);
              btnNameReact === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
