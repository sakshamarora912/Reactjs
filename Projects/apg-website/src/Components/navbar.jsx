import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/APG-logo-01.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
      <nav className="bg-white text-black p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
            <img src={logo} alt="APG Logo" className="w-[5em]" />
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-[#5183a2] text-2xl p-2"> ☰ </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:flex space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0 shadow-lg lg:shadow-none z-50`}
        >
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/"> Home </Link>
          </li>
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/doctor-consultation"> Doctor Consultation </Link>
          </li>
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/diagnostics"> Diagnostics </Link>
          </li>
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/home-care"> Home Care </Link>
          </li>
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/physio"> Physio </Link>
          </li>
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/radiology"> Radiology </Link>
          </li>
          <li>
            <Link className="text-[#5183a2] hover:text-[#487490]" to="/medical-equipment"> Medical Equipment</Link>
          </li>
        </ul>

        <button className="hidden lg:block bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#487490]">
          Log In
        </button>
      </nav>

      {/* Secondary Navbar */}
      <nav className="bg-[#5183a2] flex flex-col lg:flex-row p-3 justify-around items-center text-white text-center">
        <button className="bg-red-600 text-white px-4 py-2 rounded mb-2 lg:mb-0 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
          Book an Ambulance
        </button>
        <button className="bg-white text-[#5183a2] px-4 py-2 rounded mb-2 lg:mb-0 hover:bg-[#487490] focus:outline-none focus:ring-2 focus:ring-blue-500">
          Online Doctor @---
        </button>
        <p className="lg:mb-0">
          CALL US: <span className="font-bold">+91----------, +91----------</span>
        </p>
      </nav>
    </section>
  );
};

export default Navbar;
