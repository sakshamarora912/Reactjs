import React from 'react';
import { Link } from 'react-router-dom';
import react1 from "../assets/ME_PHOTO.png";

import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Contact Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 border-blue-500 pb-2">Contact Me</h2>
            <p className="mb-4 text-gray-300 text-base md:text-lg">I am a Front-End Developer. Feel free to reach out to me through the following platforms:</p>
            <div className="flex justify-center md:justify-start gap-6 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaInstagram size={28} />
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <FaWhatsapp size={28} />
              </a>
              <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <FaTelegramPlane size={28} />
              </a>
            </div>
            <Link to="/contact">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors text-base md:text-lg">
                Contact
              </button>
            </Link>
          </div>
          {/* Image Section */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img src={react1} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-gray-700 shadow-lg" alt="React" />
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SAKSHAM ARORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
