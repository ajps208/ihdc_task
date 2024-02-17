import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css"; // Importing custom CSS file
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SecondSection() {
  // Custom Next Arrow Component
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIcon style={{ color: "black" }}></ArrowForwardIcon>
      </div>
    );
  };

  // Custom Previous Arrow Component
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIcon style={{ color: "black" }}></ArrowBackIcon>
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, // Using custom next arrow component
    prevArrow: <SamplePrevArrow />, // Using custom previous arrow component
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className=" text-base mb-3 md:text-3xl  font-thin text-teal-400 flex flex-col items-center justify-center">
          Unlock Premium Features Now
          <img className=" w-40 mt-1" src="/assets/line.png" alt="" />
        </h1>
      </div>
      {/* Slider Section */}
      <div className="slider-container">
        <Slider {...settings}>
          {/* Individual Slider Cards */}
          <div className="card w-40  border-2 border-teal-500 rounded-lg mx-2">
            <img src="/assets/img1.jpg" alt="" />
            <div className="flex items-center justify-center">
              {/* <p className="md:text-xl text-teal-400">
                Lower
                <br />
                Interest Rates
              </p> */}
              <div className="premium md:text-xl text-teal-400 md:flex md:flex-col md:justify-center md:items-center p-2 ">
                <p>Lower</p>
               <p> Interest Rates</p>
              </div>
            </div>
          </div>
          <div className="card w-40  border-2 border-teal-500 rounded-lg mx-2">
            <img src="/assets/img2.jpg" alt="" />
            <div className="flex items-center justify-center">
              <div className="premium md:text-xl text-teal-400 md:flex md:flex-col md:justify-center md:items-center p-2 ">
               <p> Interest</p>
               <p> Fee Payments</p>
              </div>
            </div>
          </div>
          <div className="card w-40  border-2 border-teal-500 rounded-lg mx-2">
            <img src="/assets/img3.jpg" alt="" />
            <div className="flex items-center justify-center">
              <div  className="premium md:text-xl text-teal-400 md:flex md:flex-col md:justify-center md:items-center p-2 ">
                <p>Discount</p>
                <p>On Materials</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Buttons Section */}
      <div className="flex flex-col justify-center items-center mt-6">
        <button
          type="button"
          className="w-52 px-3 py-2 text-xs font-medium text-center text-white rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 "
        >
          UNLOCK NOW
        </button>
        <button
          type="button"
          className=" w-44 px-3 py-2 mt-3 text-xs font-medium text-center text-white rounded-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 "
        >
          DETAILS
        </button>
      </div>
    </div>
  );
}

export default SecondSection;
