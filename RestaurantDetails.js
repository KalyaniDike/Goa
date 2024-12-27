// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./RestaurantDetails.css"; // Styles for the details page
// import rest1 from "../Rest_img/rest1.avif";
// import rest2 from "../Rest_img/rest2.avif";
// import rest3 from "../Rest_img/rest3.avif";
// import rest4 from "../Rest_img/rest4.jpg";
// import rest5 from "../Rest_img/rest5.jpg";
// import rest6 from "../Rest_img/rest6.jpg";

// const restaurantDetails = [
//   {
//     id: 1,
//     name: "Dine at The Cape Goa",
//     cuisine: "Indian, Seafood",
//     specialFood: "Paneer Tikka",
//     description:
//       "Paneer Tikka tasted too much of masala and onion rings were coated in semolina.",
//     price: "₹₹ - ₹₹₹",
//     status: "Open now",
//     image: rest1,
//   },
//   {
//     id: 2,
//     name: "Nautica",
//     cuisine: "Indian",
//     specialFood: "Tandoori Chicken",
//     description: "Experience authentic Indian delicacies in a premium setting.",
//     price: "₹₹",
//     status: "Open now",
//     image: rest2,
//   },
//   {
//     id: 3,
//     name: "Martin's Corner",
//     cuisine: "Goan, Seafood",
//     specialFood: "Prawn Curry Rice",
//     description: "Serving authentic Goan seafood with a flavorful twist.",
//     price: "₹₹₹",
//     status: "Closed now",
//     image: rest3,
//   },
//   {
//     id: 4,
//     name: "The Fisherman’s Wharf",
//     cuisine: "Seafood, Goan",
//     specialFood: "Fish Curry Rice",
//     price: "₹₹₹",
//     status: "Open now",
//     image: rest4,
//   },
//   {
//     id: 5,
//     name: "Spice Route",
//     cuisine: "Indian, Chinese",
//     specialFood: "Butter Chicken",
//     price: "₹₹",
//     status: "Open now",
//     image: rest5,
//   },
//   {
//     id: 6,
//     name: "The Goan Kitchen",
//     cuisine: "Goan, Continental",
//     specialFood: "Goan Sausage Pulao",
//     price: "₹₹₹",
//     status: "Open now",
//     image: rest6,
//   },
// ];

// const RestaurantDetails = () => {
//   // const { id } = useParams();  // Extracting 'id' from the URL
//   // console.log(id);  // Log the id to ensure it's being passed correctly.
//   const { id } = useParams();  // Extracting 'id' from the URL
// console.log(id);  // Log the id to ensure it's being passed correctly.

//   const navigate = useNavigate();
  

//   // Find the restaurant by id, or return null if not found
//   const restaurant = restaurantDetails.find((res) => res.id === parseInt(id));
  
//   if (!restaurant) return <h2>Restaurant not found</h2>;

//   return (
    
//     <div className="restaurant-details-container">
//       <button onClick={() => navigate(-1)} className="back-button">← Back</button>
//       <img src={restaurant.image} alt={restaurant.name} className="main-image" />
//       <h1>{restaurant.name}</h1>
//       <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
//       <p><strong>Special Food:</strong> {restaurant.specialFood}</p>
//       <p><strong>Price:</strong> {restaurant.price}</p>
//       <p><strong>Status:</strong> {restaurant.status}</p>
//       <p className="description">{restaurant.description}</p>
//     </div>
//   );
// };

//---------------------------------------------------- export default RestaurantDetails;




import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RestaurantDetails.css";

// Main restaurant images
import rest1 from "../Rest_img/rest1.avif";
import rest2 from "../Rest_img/rest2.avif";
import rest3 from "../Rest_img/rest3.avif";
import rest4 from "../Rest_img/rest4.jpg";
import rest5 from "../Rest_img/rest5.jpg";
import rest6 from "../Rest_img/rest6.jpg";

// Food images
import dine1 from "../Rest_img/dine1.jpg";
import dine2 from "../Rest_img/dine2.jpg";
import dine3 from "../Rest_img/dine3.jpg";
import dine4 from "../Rest_img/dine4.jpg";
import dine5 from "../Rest_img/dine5.jpg";
import dine6 from "../Rest_img/dine6.jpg";
import dine7 from "../Rest_img/dine7.jpg";
import dine8 from "../Rest_img/dine8.jpg";
import dine9 from "../Rest_img/dine9.jpg";
//------------------------------------------------

import naut1 from "../Rest_img/naut1.jpg";
import naut2 from "../Rest_img/naut2.jpg";
import naut3 from "../Rest_img/naut3.jpg";
import naut4 from "../Rest_img/naut4.jpg";
import naut5 from "../Rest_img/naut5.jpg";
import naut6 from "../Rest_img/naut6.jpg";
import naut7 from "../Rest_img/naut7.jpg";
import naut8 from "../Rest_img/naut8.jpg";
import naut9 from "../Rest_img/naut9.jpg";
//--------------------------------------------------

import martin1 from "../Rest_img/martin1.jpg";
import martins2 from "../Rest_img/martins2.jpg";
import martin3 from "../Rest_img/martin3.jpg";
import martin4 from "../Rest_img/martin4.jpg";
import martin5 from "../Rest_img/martin5.jpg";
import martin6 from "../Rest_img/martin6.jpg";
import martin7 from "../Rest_img/martin7.jpg";
import martin8 from "../Rest_img/martin8.jpg";
import martin9 from "../Rest_img/martin9.jpg";
//-------------------------------------------------

import fisherr1 from "../Rest_img/fisherr1.jpg";
import fisher2 from "../Rest_img/fisher2.jpg";
import fisher3 from "../Rest_img/fisher3.jpg";
import fisher4 from "../Rest_img/fisher4.jpg";
import fisher5 from "../Rest_img/fisher5.webp";
import fisher6 from "../Rest_img/fisher6.jpg";
import fisher7 from "../Rest_img/fisher7.avif";
import fisher8 from "../Rest_img/fisher8.jpg";
import fisher9 from "../Rest_img/fisher9.jpg";
//-----------------------------------------------

import spice1 from "../Rest_img/spice1.jpg";
import spice2 from "../Rest_img/spice2.jpg";
import spice3 from "../Rest_img/spice3.jpeg";
import spice4 from "../Rest_img/spice4.jpg";
import spice5 from "../Rest_img/spice5.jpg";
import spice6 from "../Rest_img/spice6.jpg";
import spice7 from "../Rest_img/spice7.avif";
import spice8 from "../Rest_img/spice8.jpg";
import spice9 from "../Rest_img/spice9.jpg";
//------------------------------------------------

import goan1 from "../Rest_img/goan1.jpg";
import goan2 from "../Rest_img/goan2.jpeg";
import goan3 from "../Rest_img/goan3.jpg";
import goan4 from "../Rest_img/goan4.jpg";
import goan5 from "../Rest_img/goan5.webp";
import goan6 from "../Rest_img/goan6.jpg";
import goan7 from "../Rest_img/goan7.jpg";
import goan8 from "../Rest_img/goan8.png";
import goan9 from "../Rest_img/goan9.webp";



const restaurantDetails = [
  {
    id: 1,
    name: "Dine at The Cape Goa",
    cuisine: "Indian, Seafood",
    price: "₹40–₹1,400",
    status: "Open 8 AM-11 PM,",
    image: rest1,  
    specialFood: [
      { name: "Fresh Crab ", image: dine1, price: "₹700", description: "fresh crab is flavoured with aromatic spices like cloves and tamarind and cooked gently in rich coconut gravy." },
      { name: "Tandoori Tikka chicken", image: dine2, price: "₹900", description: "Tandoori Tikka Chicken at The Cape Goa features tender, spice-marinated chicken, perfectly tandoor-grilled, served with mint chutney and sides, all enjoyed with stunning ocean views." },
      { name: "Fish", image: dine3, price: "₹1000", description: "The Cape Goa offers fresh, locally sourced fish dishes, including grilled fish and seafood platters, showcasing Goan coastal flavors with a stunning ocean view." },
      { name: "Biriyani", image: dine4, price: "500", description: "At The Cape Goa, the biryani is a flavorful and aromatic dish made with fragrant basmati rice, tender meat (like chicken or mutton), and a blend of spices. It’s cooked to perfection, offering a rich, savory taste with a touch of Goan influence." },
      { name: "Home-Cooked Desserts", image: dine5, price: "₹200 to ₹1401.", description: "The home-cooked desserts at The Cape Goa offer a delicious end to your meal, featuring a mix of traditional and local flavors, crafted with care and attention to detail. Prices vary, and it's best to check with the restaurant for the most current offerings" },
       { name: "Naan ", image: dine6, price: "₹40 to ₹90", description: "At The Cape Goa, naan is a leavened, oven-baked flatbread, typically served warm and brushed with butter or ghee." },
      { name: "French Fries ", image: dine7, price: "₹300 to ₹800", description: "At The Cape Goa, French fries are a popular side dish, featuring crispy, golden-fried potato strips, lightly seasoned and perfect for pairing with various main courses or enjoyed as a snack. " },
       { name: "Seafood", image: dine8, price: "₹1200", description: "Dine at The Cape Goa offers a stunning seaside dining experience in South Goa, blending Indian, Goan, and Continental cuisines." },
       { name: "Ground Spices", image: dine9, price: "₹299", description: "Ground spices in dine at the cape goa are a vibrant mix of aromatic and flavorful ingredients that form the backbone of its cuisine. Popular spices include turmeric, cumin, coriander, cinnamon, cloves, and cardamom, often blended with local chili powders and dried coconut." },
    ],
  },
  {
    id: 2,
    name: "Nautica",
    cuisine: "Indian",
    price: "₹200–₹3000",
    status: "Open 7 AM-11 PM,",
    image: rest2,
    specialFood: [
      { name: "Dessert", image: naut1, price: "₹1400", description: "Nautica at Mayfair Hideaway Spa Resort in Cavelossim, Goa, offers a mix of traditional Goan desserts like Bebinca and Serradura alongside contemporary sweet treats. For specific dessert options, check their menu directly." },
       { name: "strawberry daiquiri’s ", image: naut2, price: "₹900", description: "Nautica’s Strawberry Daiquiri is a refreshing cocktail made with fresh strawberries, lime juice, and white rum, offering a perfect balance of sweetness and tanginess. It's an ideal accompaniment to their flavorful Goan and continental dishes." },
       { name: "red mullet", image: naut3, price: "₹2300", description: "Red mullet in Goa is a prized seafood delicacy, known for its tender, flavorful meat. Often served grilled or fried with Goan spices, it embodies the region’s rich coastal culinary heritage. Prices vary by market and season." },
      { name: "prawns ", image: naut4, price: "₹1400", description: "Prawn dishes at Nautica in Goa are part of a premium dining experience, with an average meal for two priced around ₹1,400. Specific prices may vary; contact the restaurant for details." },
       { name: "fish recheado,  ", image: naut5, price: "₹1500", description: "Fish Recheado at Nautica is a flavorful Goan dish featuring fish stuffed with spicy masala. Prices aren't listed, but the average meal for two is around ₹1,400." },
       { name: "grilled salmon", image: naut6, price: "₹500", description: "Grilled salmon at Nautica in Goa is a flavorful, expertly cooked dish, likely served with a side of vegetables or a light sauce. Prices are not listed, but a typical meal for two is around ₹250." },
       { name: "IceCream", image: naut7, price: "₹200", description: "Ice cream at Nautica in Goa is likely a delightful dessert option, part of a premium dining experience where meals for two average around ₹1,400. Specific prices may vary." },
      { name: "grilled salmon & a spectacular sea food", image: naut8, price: "₹400 to 1200", description: "Goa offers a seafood lover’s paradise with fresh, flavorful grilled salmon at beachside shacks and fine-dining spots. Popular places like Fisherman’s Wharf and Martin’s Corner serve this delicacy, often priced between ₹400–₹1,200. Don’t miss other local seafood delights while enjoying Goa’s coastal charm!" },
       { name: "Seafood", image: naut9, price: "₹1200", description: "Seafood is fresh, flavorful, and diverse, featuring dishes like grilled fish, prawns, crab masala, and local specialties like fish curry and prawn balchao, all seasoned with coastal spices and coconut. Perfect by the beach!." },
    ],
  },
  //-----------------------------------------------------------------------
  {
    id: 3,
    name: "Martin's Corner",
    cuisine: "Goan, Seafood",
    price: "₹2000–₹3,000.",
    status: "1:30 am–4 pm, 6:30–11:30 pm",
    image: rest3,
    specialFood: [
      { name: "Fish & Prawn Curry Rice", image: martin1, price: "₹450", description: "Fish or Prawns cooked in coconut curry and local spices, served on a bed of rice. A must have each time you're in Goa." },
      { name: "Chichen Xacuti", image: martins2, price: "₹600", description: "A classic goan dish from the Portuguese era, packed with spices." },
      { name: "King Fish Masala Fry", image: martin3, price: "₹450", description: "King Fish Masala Fry is a crispy, spiced delicacy made by marinating king fish in a flavorful blend of spices and shallow-frying it. Served with lime and onions, it's a Goan favorite!" },
      { name: "King Crab Masala", image: martin4, price: "₹1000", description: "Sachin Tendulkar's favourite dish at Martin's Corner Goa. King Crab is also available in butter garlic preparation." },
      { name: "Serradura", image: martin5, price: "₹1350", description: "Literally translating from Portuguese as 'saw dust', this time-tested desert is made of two layers of sweetened whipped cream and fine powdered tea biscuits." },
      { name: "Goan Pork Chops", image: martin6, price: "₹1200", description: "Tender, juicy, flavourful and fiery - these delicious Goan pork chops are best eaten with plain rice or bread." },
      { name: "Goan Sausages", image: martin7, price: "₹200", description: "Hot and tangy, authentic Goan sausages are made with pork, vinegar, garlic, hot chili peppers and spices." },
      { name: "Goan Beef Chilly Fry", image: martin8, price: "₹400", description: "A must have in rainy Goa weather. Small beef pieces cooked with potatoes, ginger, garlic, tumeric, peppercorns, cloves, cinnamon and more!" },
      { name: "Bebinca", image: martin9, price: "₹300", description: "Goa's traditional Christmas pudding of choice, made of seven layers including plain flour, sugar, ghee, egg yolk and coconut milk." },
    ],
  },
  {
    id: 4,
    name: "The Fisherman’s Wharf",
    cuisine: "Seafood, Goan",
    price: "₹120–₹1,400.",
    status: "12 pm -11.30 pm",
    image: rest4,
    specialFood: [
      { name: "Fish Curry Rice", image: fisherr1, price: "₹350", description: "A quintessential Goan dish featuring fresh fish cooked in a tangy and spicy coconut-based curry, served with steamed rice. Priced around ₹300." },
      { name: "Chicken Xacut", image: fisher2, price: "₹400", description: "A flavorful curry made with marinated chicken cooked in a rich blend of roasted spices and coconut, offering a unique taste of Goa. Priced around ₹400." },
      { name: "Prawn Curry Rice", image: fisher3, price: "₹450", description: "Succulent prawns cooked in a spicy and tangy coconut curry, served alongside steamed rice. Priced around ₹450." },
      { name: "Fish Tikka", image: fisher4, price: "₹350", description: "Marinated fish pieces grilled to perfection, served with a side of tangy mint chutney. Priced around ₹350." },
      { name: "Bombil Fry", image: fisher5, price: "₹300", description: "Bombil (Bombay Duck) marinated and fried until crispy, offering a unique taste of Goan coastal cuisine. Priced around ₹300." },
      { name: "Tandoori Malai Mushroom", image: fisher6, price: "₹350", description: "Mushrooms marinated in a creamy blend of yogurt and spices, then grilled to perfection. Priced around ₹350." },
      { name: "Drums of Heaven", image: fisher7, price: "₹400", description: "Crispy fried chicken wings tossed in a spicy and tangy sauce, a popular appetizer. Priced around ₹400." },
      { name: "Fish Thali", image: fisher8, price: "₹600", description: "A traditional Goan platter featuring a variety of fish preparations, served with rice, curry, and accompaniments. Priced around ₹600." },
      { name: "Prawn Balchao", image: fisher9, price: "₹550", description: "Prawns cooked in a spicy and tangy red chili and vinegar sauce, offering a burst of flavors. Priced around ₹550." },
    ],
  },
  {
    id: 5,
    name: "Spice Route",
    cuisine: "Indian, Chinese",
    price: "₹120–₹2,000.",
    status: "Open 8 AM-11 PM,",
    image: rest5,
    specialFood: [
      { name: "Goan Fish Curry Rice", image: spice1, price: "₹300", description: "A quintessential Goan dish featuring fresh fish cooked in a tangy and spicy coconut-based curry, served with steamed rice. Priced around ₹300." },
      { name: "Chicken Xacuti", image: spice2, price: "₹400", description: "A flavorful curry made with marinated chicken cooked in a rich blend of roasted spices and coconut, offering a unique taste of Goa. Priced around ₹400." },
      { name: "Prawn Curry Rice", image: spice3, price: "₹450", description: "Succulent prawns cooked in a spicy and tangy coconut curry, served alongside steamed rice. Priced around ₹450." },
      { name: "Malai Kofta", image: spice4, price: "₹350", description: "Creamy and rich, this dish features deep-fried vegetable balls served in a smooth tomato-based gravy. Priced around ₹350." },
      { name: "Aloo Tikki", image: spice5, price: "₹250", description: "Crispy potato patties seasoned with a perfect mix of spices and fresh coriander, served alongside a tangy tamarind chutney. Priced around ₹250." },
      { name: "Soya Chaap Tikka", image: spice6, price: "₹300", description: "Marinated soya chaap pieces grilled to perfection, offering a delightful vegetarian alternative to traditional tikkas. Priced around ₹300.." },
      { name: "Cheese Lollipop", image: spice7, price: "₹350", description: "Cheese-stuffed fritters coated in a crispy batter, served with a spicy dip. Priced around ₹350." },
      { name: "Lotus Stem Honey Chilli", image: spice8, price: "₹400", description: "Crispy lotus stem pieces tossed in a sweet and spicy honey-chili sauce. Priced around ₹400." },
      { name: "Dahi ke Kebab", image: spice9, price: "₹300", description: "Soft and creamy yogurt-based kebabs, lightly fried and served with a tangy mint chutney. Priced around ₹300." },
    ],
  },
  {
    id: 6,
    name: "The Goan Kitchen",
    cuisine: "Goan, Continental",
    price: "₹200–₹2,000",
    status: "Open 8 AM-11.30 PM",
    image: rest6,
    specialFood: [
    { name: "Prawn Balchao", image: goan1, price: "₹500", description: "A spicy and tangy prawn pickle-like dish made with a rich blend of spices and vinegar." },
    { name: "Fish Recheado", image: goan2, price: "₹400", description: "Fish, often mackerel, stuffed with a fiery red masala paste and pan-fried." },
    { name: "Bebinca", image: goan3, price: "₹250", description: "A traditional Goan layered dessert made from coconut milk, sugar, and egg yolks. Desserts like this are usually priced at ₹250." },
    { name: "Goan Fish Curry", image: goan4, price: "₹450", description: "A staple dish featuring fish cooked in a coconut-based curry with Goan spices." },
    { name: "Pork Vindaloo", image: goan5, price: "₹600", description: "A spicy and tangy pork curry with Portuguese influence, made with vinegar and garlic." },
    { name: "Calamari Fry", image: goan6, price: "₹400", description: "Deep-fried squid rings seasoned with Goan spices. Around ₹400." },
    { name: "Serradura", image: goan8, price: "₹200", description: "A creamy Portuguese-influenced dessert made with sweetened cream and crushed biscuits." },
     { name: "King Crab Masala", image: goan9, price: "₹2800", description: "A luxurious dish featuring king crab cooked in a rich, spicy masala sauce. Prices can be higher; approximately ₹2,800." },
   { name: "Crab Xec Xec", image: goan7, price: "₹600", description: "A thick, flavorful crab curry made with roasted spices and coconut. Prices vary; around ₹600." },
     ],
},
];

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurantDetails.find((res) => res.id === parseInt(id));
  const [selectedFood, setSelectedFood] = useState(null);

  if (!restaurant) return <h2>Restaurant not found</h2>;

  return (
    <div className="restaurant-details-container">
      {/* <button onClick={() => navigate(-1)} className="back-button">← Back</button> */}
      <img src={restaurant.image} alt={restaurant.name} className="main-image" />
      <h1>{restaurant.name}</h1>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Price:</strong> {restaurant.price}</p>
      <p><strong>Status:</strong> {restaurant.status}</p>

      <div className="food-grid">
        {restaurant.specialFood.map((food, index) => (
          <img
            key={index}
            src={food.image}
            alt={food.name}
            className={`food-image ${selectedFood === food ? "selected" : ""}`}
            onClick={() => setSelectedFood(food)}
          />
        ))}
      </div>

      {selectedFood && (
        <div className="food-details">
          <h2>{selectedFood.name}</h2>
          <p>{selectedFood.description}</p>
          <p><strong>Price:</strong> {selectedFood.price}</p>
          <img src={selectedFood.image} alt={selectedFood.name} className="selected-food-image" />
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
