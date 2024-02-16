import React from "react";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const navigate = useNavigate();
  //  functon to navigate form page
  const handleClick = () => {
    navigate("/form");
  };
  return (
    <div>
      <div className="flex items-start justify-center flex-col ps-4">
        <h2 style={{ fontSize: "2rem" }}>New Arrival</h2>
        <p className="text-xs font-medium">
          <span>
            <u className="w-1">JOIN</u>
          </span>{" "}
          TODAY
        </p>
      </div>
      <div className="md:ms-24 flex justify-center items-center flex-col ">
        <img className="w-64" src="assets/membership.jpg" alt="" />
        <button
          onClick={handleClick}
          type="button"
          className="w-56 px-3 py-2 text-xs font-medium text-center text-blue-500 rounded-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border border-gray-300"
        >
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default FirstSection;
