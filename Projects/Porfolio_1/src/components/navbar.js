import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 1) setColor(true);
    else setColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={`fixed w-full h-20 z-50 ${color ? 'bg-black' : 'bg-transparent'} transition-colors duration-500`}>
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        <Link to="/"><h1 className="text-white text-2xl font-bold">Portfolio</h1></Link>
        <ul className={`flex ${click ? 'flex-col' : 'hidden'} md:flex md:flex-row md: space-x-8 space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-20 md:top-0 left-0 md:left-auto w-full md:w-auto bg-gradient-to-b from-black to-gray-800 md:bg-transparent h-screen md:h-auto rounded-lg shadow-lg transition-all duration-500 ${click ? 'left-0' : '-left-full'} md:bg-none md:shadow-none`}>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300"><Link to="/" className="text-white text-lg font-medium">Home</Link></li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300"><Link to="/project" className="text-white text-lg font-medium">Project</Link></li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300"><Link to="/about" className="text-white text-lg font-medium">About</Link></li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300"><Link to="/contact" className="text-white text-lg font-medium">Contact</Link></li>
        </ul>
        <div className="md:hidden flex items-center" onClick={handleClick}>
          {click 
          ? <FaTimes size={20} className="text-white" />
           : <FaBars size={20} className="text-white" />
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
