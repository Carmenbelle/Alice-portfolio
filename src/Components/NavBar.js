import React from "react";
import { AiFillGold } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full md:container md:max-w-screen p-4 flex justify-between text-white text-xl bg-purple-800 ">
        <Link to="/">
          <div className="flex ml-8 pt-2 hover:text-gray-300 cursor-pointer font-bold md:hover:scale-125 transition duration-700 ease-in-out ">
            <span>
              <AiFillGold />
            </span>
            <div>Aliyo</div>
          </div>
        </Link>

        <div className="md:space-x-20 md:mr-8">
          {/* <div onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div> */}
          <Link to="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
          <Link to="/aboutme" className="hover:text-gray-300">
            About Me
          </Link>
          <Link
            to="/contact"
            className="outline outline-1 text-gray-300 px-4 py-2 rounded hover:bg-gray-100 hover:text-purple-900"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
