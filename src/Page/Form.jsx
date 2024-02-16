import React from "react";
import FromNav from "../Components/FormComponents/FormNav";

function Form() {
  return (
    <div>
      {/* Include FormNav component */}
      <FromNav></FromNav>

      {/* Form section */}
      <div className="container mx-auto mt-10 p-5 md:flex ">
        {/* Left Section */}
        <div className="md:w-6/12">
          <div className="flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="text-xl md:text-5xl font-semibold text-blue-400 mt-8">
              Unlock Exclusive Benfits
            </h1>

            {/* Form inputs */}
            <div className=" w-8/12 mt-5">
              <label htmlFor="phno">PHONE NUMBER</label>
              <div className="w-full flex items-center justify-center mt-2">
                {/* Phone number input with country code select */}
                <select className="p-2 h-10 w-[49%] rounded-full border border-gray-300 focus:outline-none focus:border-blue-500">
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+91">India (+91)</option>
                </select>

                {/* Phone number input */}
                <input
                  type="text"
                  className="p-2 h-10 w-[49%] ms-1 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="97399726482"
                />
              </div>
            </div>

            {/* Name input */}
            <div className=" w-8/12 mt-5">
              <label htmlFor="phno">NAME</label>
              <input
                type="text"
                className="mt-2 p-2 h-10 w-full rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email input */}
            <div className=" w-8/12 mt-5">
              <label htmlFor="phno">EMAIL [OPTIONAL]</label>
              <input
                type="text"
                className="mt-2 p-2 h-10 w-full rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Continue button */}
            <div className=" w-8/12 mt-5">
              <button className="flex items-center justify-center text-white p-2 h-10 w-full rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-blue-500">
                CONTINUE
              </button>
            </div>

            {/* Information text */}
            <div className="mt-5  w-8/12">
              <p className=" text-sm">
                Get ready to recieve a sceret code [otp] on your phone
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        {/* Image or any content you want to display */}
        <div className="md:w-6/12 mb-14 mt-3">
          <img src="/assets/celeb.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Form;
