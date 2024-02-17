import React from "react";
import { useNavigate } from "react-router-dom";
import './Main.css'

function FirstSection() {
  const navigate = useNavigate();
  //  functon to navigate form page
  const handleClick = () => {
    navigate("/form");
  };
  return (
    <div>
      <div className="flex items-start justify-center flex-col ps-4">
        <h2 className=" font-thin" style={{ fontSize: "2rem" }}>New Arrival</h2>
        <p className="text-xs font-medium">
          JOIN TODAY
        </p>
        <hr className=" w-5 mt-2 font-semibold border-2 border-black" />
      </div>
      <div className="md:ms-24 flex justify-center items-center flex-col ">
        <img className="w-64" src="assets/membership.jpg" alt="" />
        <button
          onClick={handleClick}
          type="button"
          className="w-56 mb-10 md:mb:0 px-3 py-2 text-xs font-medium text-center text-blue-500 rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border border-gray-300"
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default FirstSection;
