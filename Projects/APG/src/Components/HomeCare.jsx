import React from 'react';
import { Outlet, Link } from "react-router-dom"; 
import HomeNursing from '../assets/HomeNursing.jpg'
import BabyCare from '../assets/BabyCare.jpg'
import PatientCare from '../assets/PatientCare.jpg'
import ElderlyCare from '../assets/ElderlyCare.jpg'
import VaccinationatHome from '../assets/VaccinationatHome.jpg'
import ECGTestAtHome from '../assets/ECGTestAtHome.jpg'
import DoctorAtHome from '../assets/DoctorAtHome.jpg'

const HomeCare = () => {
  const services = [
    { department: 'Critical Nursing', duration: '24 hrs 30 days (2 shifts)', price: 'Rs. ---/Per day'},
    { department: 'Patient Attender', duration: '24 hrs 30 days', price: 'Rs. ---' },
  ];

  return (
    <section className="p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Home Care Services</h1>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg">
          The demand for home care services is rising as work and personal lives become more intertwined, making it challenging
          for individuals to care for the elderly and those in need. APG has partnered with trusted home care providers to offer
          affordable, high-quality support. Our caregivers are highly qualified and trained to maintain hygiene and support
          overall well-being. We also provide online doctor consultations to monitor health conditions for those in need,
          ensuring exceptional care for the elderly and individuals requiring assistance during illnesses.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Our Home Care Services</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {[ 
            { title: 'Home Nursing', img: HomeNursing, link: "home-nursing" },
            { title: 'Baby Care', img: BabyCare, link: "baby-care" },
            { title: 'Patient Care', img: PatientCare, link: "patient-care" },
            { title: 'Elderly Care', img: ElderlyCare, link: "elderly-care" },
            { title: 'Vaccination at Home', img: VaccinationatHome, link: "vaccination-at-home" },
            { title: 'ECG Test At Home', img: ECGTestAtHome, link: "ecg-test-at-home" },
            { title: 'Doctor at Home', img: DoctorAtHome, link: "doctor-at-home" }
          ].map((service, index) => (
            <Link key={index} to={service.link} className="w-full sm:w-40 md:w-48 lg:w-60 p-3">
              <div className="text-center bg-white shadow-md rounded-lg p-4">
                <img className="h-16 w-16 mx-auto mb-2 transform scale-150" src={service.img} alt={service.title} />
                <p className="text-gray-700 font-medium text-sm md:text-base">{service.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 p-4 shadow-md rounded-lg mt-6 mb-6">
          <Outlet />
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Benefits of Home Care Services</h1>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Many elderly individuals struggle with daily activities like bathing, eating, and maintaining hygiene. A key focus of
          home nursing services is to provide emotional support and comprehensive care to older adults. Our skilled and
          experienced home nursing team offers personalized guidance, assisting patients in maintaining good health and
          developing an ideal diet plan to support recovery.
        </p>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Home nursing services are designed to treat illnesses and injuries, covering a range of care needs: wound care (both
          surgical and non-surgical), patient and caregiver education, rehabilitation therapies, and health monitoring for
          unstable conditions. Our home care services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
          <li>Assisting with feeding</li>
          <li>Supporting safe mobility to prevent falls</li>
          <li>Bathing, oral hygiene, and denture care</li>
          <li>Assistance with commode, bedpan, and urinal use</li>
          <li>Dressing and grooming</li>
          <li>Diaper changes</li>
          <li>Preventing bedsores</li>
          <li>Providing timely medication</li>
        </ul>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          APG delivers reliable, timely home nursing services, offering continuous support to those in need.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Why Choose Us for Home Care Services?</h1>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
          <li>Experienced caregivers deliver effective, personalized support.</li>
          <li>Partnerships with skilled physicians, hospitals, nursing facilities, and top medical equipment providers.</li>
          <li>Dedicated one-on-one attention for critical and severe cases.</li>
          <li>24/7 service availability based on individual needs.</li>
          <li>Strict adherence to safety guidelines, treating individuals with compassion and respect.</li>
          <li>Comprehensive background checks and health screenings for all caregivers to ensure high standards.</li>
        </ul>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Our Services and Pricing</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="border px-4 py-2 font-semibold text-gray-700">Department</th>
                <th className="border px-4 py-2 font-semibold text-gray-700">Services</th>
                <th className="border px-4 py-2 font-semibold text-gray-700">Price</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2 text-gray-700">{service.department}</td>
                  <td className="border px-4 py-2 text-gray-700">{service.duration}</td>
                  <td className="border px-4 py-2 text-gray-700">{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HomeCare;
