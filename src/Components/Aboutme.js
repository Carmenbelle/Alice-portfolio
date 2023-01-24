import React from "react";
import Alicepix from "../IMG/Alicepix.png";

function Aboutme() {
  return (
    <div className="md:flex p-10 md:p-0">
      <div className="mt-20 ml-20 ">
        <h2 className="text-5xl hidden md:show font-bold text-purple-800">About Me.</h2>
      </div>
        <div className="md:w-[900px] relative md:flex justify-center mt-32 ">
          <img src={Alicepix} alt="alicepic" />
        </div>
      

      <div className="p-10 md:w-[550px] text-lg md:absolute bg-purple-900 bottom-[1rem] shadow-xl rounded-lg text-gray-100 right-[10rem]">
        <p>
          {" "}
          An entrepreneur, passionate being with so much positivity ,fashion
          lover, unshakable optimist dedicated to helping people with real life
          problem solving . l investigate a problem and work to find a fix in
          the shortest amount of time possible. effective team player with a
          desire to join a growing company using my programming , software and
          communicating skills.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
