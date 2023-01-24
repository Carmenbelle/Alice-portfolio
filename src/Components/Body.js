import React from "react";
import { Link } from "react-router-dom";
import Aliceimage from "../IMG/Alicepix.png";

function Body() {
  return (
    <>
      <div className="md:flex w-full md:w-[100vw] p-10 pt-20 md:p-44 h-[95vh]">
        <div className="">
          <h4 className="text-4xl ">Hello,</h4>
          <h2 className="font-bold text-6xl py-6">I am Alice Eneyo. </h2>
          <h5 className="text-3xl text-purple-900 font-bold">Cloud Engineer</h5>
          <p className="text-gray-700 text-lg mt-8 mb-20 w-[450px] ">
            An entrepreneur, passionate being with so much positivity ,fashion
            lover, unshakable optimist dedicated to helping people with real
            life problem solving . l investigate a problem and work to find a
            fix in the shortest amount of time possible. effective team player
            with a desire to join a growing company using my programming ,
            software and communicating skills.
          </p>
          <Link
            to="/contact"
            className="bg-[rgb(77,39,151)] text-gray-100 px-4 py-2 text-2xl rounded"
          >
            Hire Me
          </Link>
        </div>
        <div className="md:left-40 md:items-end relative">
          <div className="mt-32">
            <img src={Aliceimage} alt="imagesvg" />
          </div>

          <div className="bg-purple-800 ml-4 w-96 h-96 md:w-[500px] md:h-[500px] rounded-full absolute -z-10 -right-22 bottom-32 md:-bottom-48 "></div>
        </div>
      </div>
    </>
  );
}

export default Body;
