import React from "react";
import { useNavigate } from "react-router-dom";

function FromNav() {
  const navigate = useNavigate();
  //  functon to navigate home page
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        {/* first nav section */}
        <div className="h-14 w-full bg-stone-100 mt-5 flex flex-row  items-center">
          {/* logo */}
          <img
            onClick={handleClick}
            className=" w-24 md:w-32 md:ms-40 md:mb-3"
            src="assets/real-estate-house.png"
            alt="logo"
          />
          {/* title */}
          <h1 className="text-xl font-semibold text-gray-800 md:ms-96">
            XYZ SYSTEMS LLP
          </h1>
        </div>
      </div>
    </>
  );
}

export default FromNav;
