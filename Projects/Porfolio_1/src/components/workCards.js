import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="w-[20em] bg-gray-800 p-6 mx-auto my-0 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={props.img_src} alt={props.title} className="w-full h-40 object-cover rounded-t-lg"/>
      <div className="mt-4">
        <h2 className="text-white text-2xl font-semibold mb-2">{props.title}</h2>
        <p className="text-gray-300 text-base mb-4">{props.description}</p>
        
        {props.tech && props.tech.length > 0 && (
          <div className="flex flex-wrap mb-4">
            {props.tech.map((tech, index) => (
              <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <NavLink to={props.source}x className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          View Project
        </NavLink>
      </div>
    </div>
  );
};


   export default WorkCard;

