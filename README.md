# Food App using React 🚀

# Structure of Web Page

- Header
  - Logo
  - NavItems
- Body
  - Search
  - ReataurantContainer
    -RestaurantCart
    - Image
    - Name of Res, Cuisine, Star rating, price ,etc

- Footer
  - Copyright
  - link
  - address
  - contact

Two type of Export/Import:-

1. Default export
   export default Component;
   import Component from "path";

2. Named export
   export Component
   import { Component1, Component2 } from "path";

# React Hooks :

                Normal javascript uitility function

Local State variable - super powerful variable

- useState() :
  maintain the state of application
  to modify - virtul DOM (diffing algorithm)

- useEffect():
  first body will rendered than useEffect will be called.
  the callback function will be called after component rendered.
  1. if no dependency array : useEffect called on every render
  2. if dependency array is empty : useEffect is called on initial render ( just once)
  3. if dependency array is [btnNameReact] : called everytime btnNameReact is updated
     Load -> render -> API call -> render

const [listOfRestaurant, setListOfRestaurant] = useState([]);

useEffect(() => {
console.log("useEffect Called");
fetchData();
}, []);

-Whenever state variable update, react triggers a reconciliation cycle( re-render the component )
