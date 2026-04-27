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

# Routes : Routes in React = URL → Component mapping using React Router

routes define which component should render for a given URL path.
A route is a mapping between:

a URL path (like /home, /about)
and a React component to display

Meaning of properties:
createBrowserRouter → creates the route system
RouterProvider → connects router to your app

path → URL path
element → component to render
errorElement → shown when route fails (like 404 or crash)

EX.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
errorElement: <Error />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

# CHILD ROUTES

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
return (

<div>
<Header />
<Outlet /> //-----------> it will filled accourding to child routes like / , /about, /contact where child pages render.
</div>
);
};

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
children: [
{
path: "/",
element: <Body />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
],
errorElement: <Error />,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

| URL        | What renders       |
| ---------- | ------------------ |
| `/`        | `Header + Body`    |
| `/about`   | `Header + About`   |
| `/contact` | `Header + Contact` |

- Link: Link is a component from React Router used to navigate between pages without reloading the browser.

import { Link } from "react-router-dom";

<Link to="/about">About</Link>

| `Link` ✅         | `<a>` ❌     |
| ----------------- | ------------ |
| No page reload    | Reloads page |
| Faster navigation | Slower       |
| Keeps app state   | Loses state  |

# Two types Routing in web page

👉 Client-side routing updates views without reloading, while server-side routing reloads the entire page from the server.

- Client side routing
- Server side routing

| Feature     | Client-Side Routing | Server-Side Routing |
| ----------- | ------------------- | ------------------- |
| Page reload | ❌ No               | ✅ Yes              |
| Speed       | Fast ⚡             | Slower              |
| Rendering   | Browser (React)     | Server              |
| Navigation  | `Link`              | `<a>`               |
| State       | Preserved           | Lost                |
| UX          | Smooth              | Traditional         |
