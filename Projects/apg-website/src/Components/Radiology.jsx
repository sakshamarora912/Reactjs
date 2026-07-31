import React from 'react'
import { Outlet, Link } from "react-router-dom";
import MRIScan from '../assets/MRIScan.jpg';
import ECG from '../assets/ECG.jpg';
import XRay from '../assets/XRay.jpg';
import CTScan from '../assets/CTScan.jpg';
import Ultrasound from '../assets/Ultrasound.jpg';

const Radiology = () => {

  const radiology = [
    { title: "MRI Scan", img: MRIScan, link: "mri-scan" },
    { title: "CT Scan", img: CTScan, link: "ct-scan" },
    { title: "ECG", img: ECG, link: "ecg" },
    { title: "Ultrasound", img: Ultrasound, link: "ultrasound-scan" },
    { title: "X-Ray", img: XRay, link: "x-ray" },
  ];

  return (
    <section className="bg-white px-6 text-black py-12 sm:px-8 lg:px-16">
      <div className="mb-8 mt-20">
        <h1 className="text-3xl font-bold mb-4 text-center sm:text-left text-[#5183a2]">Radiology Services</h1>
        <p className="text-xl mb-4 text-center sm:text-left">PET Scan, CT Scan, X-Ray, Ultrasound</p>
        <div className="flex justify-center sm:justify-start">
          <button className="px-6 py-2 text-white bg-[#5183a2] rounded-lg shadow-md hover:bg-[#3c6279] focus:outline-none focus:ring-2 focus:ring-blue-400">
            Book Now
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center sm:text-left text-[#5183a2]">Radiology Services</h2>
        <p className="text-gray-700 mb-4 text-center sm:text-left">
          APG offers a wide range of radiology services in Hyderabad at affordable prices, serving patients across India. We collaborate with diagnostic centers, hospitals, individual radiologists, medical groups, and other organizations in need of remote, off-site analysis of diagnostic imaging studies through our Teleradiology Services.
        </p>
        <p className="text-gray-700 mb-4 text-center sm:text-left">
          Our services include PET scans, CT scans, ultrasounds, ECG, and at-home X-ray services. At APG, we have a team of highly skilled technicians and radiologists with extensive knowledge of radiology. By combining advanced technology with expert care, we deliver 100% accurate results.
        </p>
      </div>

     <div className="mt-10">
        <h1 className="text-2xl font-bold mb-6 text-[#5183a2]">Radiology Services</h1>
        <div className="flex flex-wrap gap-4">
          {radiology.map((radiology, index) => (
             <Link to={radiology.link} key={index} className="p-3">
              <div key={index} className="w-[8em] text-center px-3 py-4 bg-white shadow-md rounded-lg">
                <img className="h-12 mx-auto mb-2 transform scale-150" src={radiology.img} alt={radiology.title} />
                <p className="text-md font-medium text-black">{radiology.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="shadow-md rounded-lg mt-6 mb-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Radiology
