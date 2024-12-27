// import React from "react";
// import { createBrowserRouter } from "react-router-dom";

// // Import your components
// import App from "./App";
// import Home from "./Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import DestinationDetailPage from "./components/Destination/DestinationDetailPage";
// import FinalDestinations from "./components/FinalDestinations";
// import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";
// import Review from "./components/Review/Review";
// import MenuContent from "./components/NavbarContent/MenuContent";
// import Menurouting from "./components/NavbarContent/Menurouting";

// import SouthGoaPackage from "./PackagesDetails/SouthGoaPackage";
// import Honeymoon from "./PackagesDetails/Honeymoon";
// import Package1 from "./PackagesDetails/Package1";
// import FamilyPackage from "./PackagesDetails/FamilyPackage";
// import NorthGoaPackage from "./PackagesDetails/NorthGoaPackage";
// import HinterlanGoaPackage from "./PackagesDetails/HinterlanGoaPackage";
// import Packages from "./components/Packages";
// import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
// import Restaurants from "./components/Restaurants";

//const projectroute = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },     
//       // Nested Routes for Destination
//       {
//         path: "destination",
//         children: [
//           { index: true, element: <DestinationCardSlider /> },
//           { path: ":destinationId", element: <DestinationDetailPage /> },
//         ],
//       },

//       // Other Routes
//       { path: "experiences", element: <ExperienceCardSlider /> },
//       { path: "reviews", element: <Review /> },
//       { path: "menu", element: <MenuContent /> },
//       { path: "packages", element: <Packages /> },
//       { path: "routing", element: <Menurouting /> },

//       // Package Routes
//       { path: "group-tour-package", element: <Package1 /> },
//       { path: "family-tour-package", element: <FamilyPackage /> },
//       { path: "honeymoon-tour-package", element: <Honeymoon /> },
//       { path: "north-goa-tour-package", element: <NorthGoaPackage /> },
//       { path: "south-goa-tour-package", element: <SouthGoaPackage /> },
//       { path: "hinterland-goa-tour-package", element: <HinterlanGoaPackage /> },

//       // Other Routes like Restaurants, FinalDestinations, etc. can be added as needed
//       { path: "restaurants", element: <Restaurants /> },
//       { path: "final-destinations", element: <FinalDestinations /> },

//       // Login and Register Routes (uncomment and use them if needed)
//       // { path: "login", element: <Login /> },
//       // { path: "register", element: <Register /> },
//     ],
//   },
// ]);

// export default projectroute;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";

import DestinationDetailPage from "./components/Destination/DestinationDetailPage";
import FinalDestinations from "./components/FinalDestinations";
import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";

import Review from "./components/Review/Review";

import MenuContent from "./components/NavbarContent/MenuContent";
import Menurouting from "./components/NavbarContent/Menurouting";


import Packages from "./components/Packages";
import SouthGoaPackage from "./PackagesDetails/SouthGoaPackage";
import Honeymoon from "./PackagesDetails/Honeymoon";
import Package1 from "./PackagesDetails/Package1";
import FamilyPackage from "./PackagesDetails/FamilyPackage";
import NorthGoaPackage from "./PackagesDetails/NorthGoaPackage";
import HinterlanGoaPackage from "./PackagesDetails/HinterlanGoaPackage";
import Restaurants from "./components/Restaurants";
import RestaurantDetails from "./components/RestaurantDetails";


const projectroute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "loginpage",
        element: <Login />,
      },
      {
        path: "registerpage",
        element: <Register />,
      },
      
      
      {
        path: "destinations",
        element: <DestinationCardSlider />,
      },
      {
        path: "destinationdetail",
        element: <DestinationDetailPage />,
      },
      {
        path: "finaldestinations",
        element: <FinalDestinations />,
      },
      {
        path: "experiences",
        element: <ExperienceCardSlider />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "menucontent",
        element: <MenuContent />,
      },
      {
        path: "menurouting",
        element: <Menurouting />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
      {
        path: "packages/southgoa",
        element: <SouthGoaPackage />,
      },
      {
        path: "packages/honeymoon",
        element: <Honeymoon />,
      },
      {
        path: "packages/package1",
        element: <Package1 />,
      },
      {
        path: "packages/familypackage",
        element: <FamilyPackage />,
      },
      {
        path: "packages/northgoa",
        element: <NorthGoaPackage />,
      },
      {
        path: "packages/hinterland",
        element: <HinterlanGoaPackage />,
      },
      {
        path: "restaurants",
        element: <Restaurants />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantDetails />
      },
      
    ],
  },
]);

export default projectroute;
