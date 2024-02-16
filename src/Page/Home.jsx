import React from "react";
import FirstSection from "../Components/FirstSection";
import SecondSection from "../Components/SecondSection";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      {/* Main Section */}
      <div className="container mx-auto mt-10 p-5 md:flex ">
        {/* Left Section */}
        <div className="md:w-4/12 ">
          <FirstSection />
        </div>
        {/* Right Section */}
        <div className="md:w-8/12 mt-3">
          <SecondSection />
        </div>
      </div>
    </>
  );
}

export default Home;
