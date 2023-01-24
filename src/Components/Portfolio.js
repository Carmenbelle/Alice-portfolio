import React from "react";
import Slider from "../IMG/slider.png";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function Portfolio() {
  return (
    <div className="w-full p-10">
      <h3 className="text-5xl text-purple-800 font-bold mt-16 mb-10">
        My Projects.
      </h3>
      <div className="w-full space-y-6 md:space-y-0 md:flex md:space-x-10 p-10 w-[85vw] m-auto ">
        <div className="bg-purple-200 w-full rounded p-8">
          <div className="p-4 relative w-full">
            <img src={Slider} alt="sliderimage" />
            <div className="bg-purple-200 w-[120px] rounded text-xl left-[75px] md:left-[100px] h-16 space-x-6 flex justify-center top-[150px] md:top-[200px] absolute pt-4">
              <Link
                to="https/github.com/aliyo"
                className="hover:text-2xl hover:text-gray-600 text-black"
              >
                <AiFillGithub />
              </Link>
              <Link
                to="https/github.com/aliyo"
                className="hover:text-2xl text-pink-500 hover:text-pink-400"
              >
                <AiFillEye />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-purple-200 w-full rounded p-8">
          <div className="p-4 relative w-full">
            <img src={Slider} alt="sliderimage" />
            <div className="bg-purple-200 w-[120px] rounded text-xl left-[75px] md:left-[100px] h-16 space-x-6 flex justify-center top-[150px] md:top-[200px] absolute pt-4">
              <Link
                to="https/github.com/aliyo"
                className="hover:text-2xl hover:text-gray-600 text-black"
              >
                <AiFillGithub />
              </Link>
              <Link
                to="https/github.com/aliyo"
                className="hover:text-2xl text-pink-500 hover:text-pink-400"
              >
                <AiFillEye />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-purple-200 w-full rounded p-8">
          <div className="p-4 relative w-full">
            <img src={Slider} alt="sliderimage" />
            <div className="bg-purple-200 w-[120px] rounded text-xl left-[75px] md:left-[100px] h-16 space-x-6 flex justify-center top-[150px] md:top-[200px] absolute pt-4">
              <Link
                to="https/github.com/aliyo"
                className="hover:text-2xl hover:text-gray-600 text-black"
              >
                <AiFillGithub />
              </Link>
              <Link
                to="https/github.com/aliyo"
                className="hover:text-2xl text-pink-500 hover:text-pink-400"
              >
                <AiFillEye />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
