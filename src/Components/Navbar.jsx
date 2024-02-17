import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //state for menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div>
        {/* first nav section */}
        <div className="h-14 w-full bg-stone-100 mt-3 flex flex-row  items-center">
          {/* logo */}
          <img
            className=" w-24 md:w-32 md:ms-40 md:mb-3"
            src="assets/real-estate-house.png"
            alt="logo"
          />
          {/* title */}
          <h1 className="text-xl font-semibold text-gray-800 md:ms-96">
            XYZ SYSTEMS LLP
          </h1>
          {/* icon for mobile device */}
          <i
            onClick={toggleMenu}
            className="md:hidden fa-solid fa-bars ps-8"
          ></i>
        </div>
        {/* second nav section */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex w-full flex flex-col md:flex-row items-center justify-center md:justify-between`}
        >
          {" "}
          {/* nav links */}
          <div className="flex flex-col md:flex-row md:ms-96  md:ps-48">
            <a href="#">
              {" "}
              <p className="font-mono">Home</p>
            </a>
            <a href="#">
              {" "}
              <p className="md:ps-5 font-mono">DashBoard</p>
            </a>
            <a href="#">
              {" "}
              <p className="md:ps-5 font-mono">Products</p>
            </a>
            <a href="#">
              {" "}
              <p className="md:ps-5 font-mono">Transactions</p>
            </a>
            <a href="#">
              {" "}
              <p className="md:ps-5 font-mono">Journal</p>
            </a>
          </div>
          {/* user name */}
          <div className=" md:pe-10">
            <div className="flex md:block items-center ">
              <i class="fa-solid fa-user-gear"></i>
              <p className="ms-1 font-mono">Joseph laser</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
