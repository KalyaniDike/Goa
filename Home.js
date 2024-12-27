import React from "react";
import { useNavigate } from "react-router-dom";
import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";
import Review from "./components/Review/Review";
import Carousal from "./components/Carousal";
import Packages from "./components/Packages";
import Restaurants from "./components/Restaurants";

const Home = () => {
  const navigate = useNavigate();

  // Function to handle card clicks
  const handleDestinationClick = (destination) => {
    navigate(`/destination/${destination.id}`, { state: destination }); // Navigate to details page with state
  };

  return (
    <>
      {/* Carousal Section */}
      <Carousal />

      {/* Destination Card Slider */}
      <div>
        <DestinationCardSlider onCardClick={handleDestinationClick} />
      </div>

      {/* Packages Section */}
      <Packages />

      {/* Experience Card Slider */}
      <ExperienceCardSlider />
      

      <Restaurants />



     
      {/* Review Section */}
      <Review />
    </>
  );
};

export default Home;
