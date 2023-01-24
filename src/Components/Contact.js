import React from "react";
import Avater from "../IMG/avater-call.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="">
      <h1 className="md:w-[500px] text-5xl ml-10 p-4 mt-20 font-bold text-purple-800">
        Contact Me.
      </h1>

      <div className="md:flex w-full p-10 md:p-20 ">
        <div className="md:w-1/2 space-y-4  ">
          <p className="text-xl text-purple-900 pb-8 pt-0 mt-0">
            l investigate a problem and work to find a fix in the shortest
            amount of time possible. kindly contact for my soft skills
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-3 ">
            <input
              for="name"
              placeholder="Name"
              className="w-full md:w-[338px] p-6 bg-purple-200 rounded"
            />
            <input
              for="email"
              placeholder="Email"
              className="w-full md:w-[338px] p-6 bg-purple-200 rounded"
            />
          </div>
          <input
            for="subject"
            placeholder="Subject"
            className="w-full p-6 bg-purple-200 rounded"
          />
          <textarea
            rows="6"
            cols="20"
            for="message"
            placeholder="Message"
            className="w-full p-6 bg-purple-200 rounded"
          />
          <button className="w-full bg-[rgb(84,12,144)] p-6 rounded text-white hover:bg-[rgb(100,14,171)] text-xl">
            Submit
          </button>
        </div>

        <div className="mt-14 md:mt-0 md:w-1/2">
          <div className="md:flex md:justify-end">
            <img src={Avater} alt="avater-call" className="md:w-[420px] " />
          </div>
          <div className="flex justify-evenly md:justify-end md:space-x-20 md:mr-10 mt-8 ">
            <Link to="" className="text-blue-400 text-2xl">
              <AiOutlineTwitter />
            </Link>
            <Link to="" className="text-black text-2xl">
              <AiFillGithub />
            </Link>
            <Link to="" className="text-blue-600 text-2xl">
              <AiFillLinkedin />
            </Link>
            <Link to="" className="text-red-400 text-2xl">
              <AiOutlineMail />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
