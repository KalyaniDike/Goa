
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Restaurants.css";
// import rest1 from "../Rest_img/rest1.avif";
// import restn2 from "../Rest_img/restn2.avif";
// import rest3 from "../Rest_img/rest3.avif";
// import rest4 from "../Rest_img/rest4.jpg";
// import rest5 from "../Rest_img/rest5.jpg";
// import rest6 from "../Rest_img/rest6.jpg";

// const restaurants = [
//   {
//     id: 1,
//     name: "Dine at The Cape Goa",
//     image: rest1,
//   },
//   {
//     id: 2,
//     name: "Nautica",
//     image: restn2,
//   },
//   {
//     id: 3,
//     name: "Martin's Corner",
//     image: rest3,
//   },
//   {
//     id: 4,
//     name: "The Fisherman's Wharf",
//     image: rest4,
//   },
//   {
//     id: 5,
//     name: "Spice Goa",
//     image: rest5,

//   },
//   {
//     id: 6,
//     name: "Suzy's Kitchen",
//     image: rest6,
//   },
// ];

// const Restaurants = () => {
//   const navigate = useNavigate();

//   // const handleNavigate = (id) => {
//   //   // Navigating to the restaurant details page using the id
//   //   navigate(`/restaurant/${id}`);
//   // };
//   const handleNavigate = (id) => {
//     console.log(`Navigating to /restaurant/${id}`);
//     navigate(`/restaurant/${id}`);
//   };
  
  

//   return (
//     <div className="restaurants-container">
//       <h1>Top Restaurants in Goa</h1>
//       <h3>South Goa</h3>
//       <div className="restaurants-list">
//         {restaurants.map((restaurant) => (
//           <div
//             className="restaurant-thumbnail"
//             key={restaurant.id}
//             onClick={() => handleNavigate(restaurant.id)}>
          
//             <img src={restaurant.image} alt={restaurant.name} />
            
            
//           </div>
          
//         ))}
//       </div>
//     </div>
//   );
// };

//  export default Restaurants;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./Restaurants.css";
import rest1 from "../Rest_img/rest1.avif";
import restn2 from "../Rest_img/restn2.avif";
import rest3 from "../Rest_img/rest3.avif";
import rest4 from "../Rest_img/rest4.jpg";
import rest5 from "../Rest_img/rest5.jpg";
import rest6 from "../Rest_img/rest6.jpg";

const southGoaRestaurants = [
  {
    id: 1,
    name: "Dine at The Cape Goa",
    image: rest1,
  },
  {
    id: 2,
    name: "Nautica",
    image: restn2,
  },
  {
    id: 3,
    name: "Martin's Corner",
    image: rest3,
  },
];

const northGoaRestaurants = [
  {
    id: 4,
    name: "The Fisherman's Wharf",
    image: rest4,
  },
  {
    id: 5,
    name: "Spice Goa",
    image: rest5,
  },
  {
    id: 6,
    name: "Suzy's Kitchen",
    image: rest6,
  },
];

const Restaurants = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    console.log(`Navigating to /restaurant/${id}`);
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="restaurants-container">
      <h1>Top Restaurants in Goa</h1>

      <h3>...South Goa...</h3>
      <div className="restaurants-list">
        {southGoaRestaurants.map((restaurant) => (
          <div
            className="restaurant-thumbnail"
            key={restaurant.id}
            onClick={() => handleNavigate(restaurant.id)}
          >
            <img src={restaurant.image} alt={restaurant.name} />
            <p className="restaurant-name">{restaurant.name}</p>
          </div>
        ))}
      </div>

      <h3>...North Goa...</h3>
      <div className="restaurants-list">
        {northGoaRestaurants.map((restaurant) => (
          <div
            className="restaurant-thumbnail"
            key={restaurant.id}
            onClick={() => handleNavigate(restaurant.id)}
          >
            <img src={restaurant.image} alt={restaurant.name} />
            <p className="restaurant-name">{restaurant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;



