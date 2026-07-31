import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white p-6 mt-0 bg-[#3d6782]">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-6 border-b-2 border-white w-full pb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>Doctor Consultation</li>
            <li>Doctor at Home</li>
            <li>Home Care Service</li>
            <li>Diagnostics Centers</li>
            <li>Medical Equipments</li>
            <li>Naturopathy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 border-b-2 border-white w-full pb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>Radiology</li>
            <li>Hospital Appointments</li>
            <li>Physiotherapy at Home</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 border-b-2 border-white w-full pb-3">About Us</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms-of-use</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 border-b-2 border-white w-full pb-3">Where To Find Us</h4>
          <p className="mb-2 flex items-center space-x-2"><FaPhone /> <span>+91 ----------</span></p>
          <p className="mb-2 flex items-center space-x-2"><FaEnvelope /> <span>apg@gmail.com</span></p>
        </div>
      </div>

      <div className="flex justify-center space-x-6 text-2xl mt-10">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaYoutube />
        </a>
      </div>

      <p className="text-center mt-7 text-sm text-gray-500">
        © 2024, APG. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
