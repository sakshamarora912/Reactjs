import React from "react";
import { Outlet, Link } from "react-router-dom";
import Pediatrician from "../assets/Pediatrician.jpg";
import Orthopedician from "../assets/Orthopedician.jpg";
import Physician from "../assets/Physician.jpg";
import Gynecologist from "../assets/Gynecologist.jpg";
import Urologist from "../assets/Urologist.jpg";
import Pulmonologist from "../assets/Pulmonologist.jpg";
import Diabetologist from "../assets/Diabetologist.jpg";
import Nephrologist from "../assets/Nephrologist.jpg";
import Dentist from "../assets/Dentist.jpg";
import QualifiedDoctors from "../assets/QualifiedDoctors.jpg";
import FastResponse from "../assets/FastResponse.jpg";
import EasyCheckups from "../assets/EasyCheckups.jpg";
import SafeSecure from "../assets/SafeSecure.jpg";
import bg_image_02 from '../assets/apg-007.jpg'


const DoctorConsultation = () => {
  return (
    <section className=" bg-gray-100 text-gray-800" >
      <div class="p-6 h-[22em] bg-right bg-white bg-no-repeat bg-contain" style={{ backgroundImage: `url(${bg_image_02})`,backgroundPosition:'45em 1em' }}>
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Online Doctor Consultation</h1>
        <p className="text-base sm:text-lg leading-relaxed mb-4 w-[30em]">
          APG is a digital healthcare platform that provides an easy way to access a wide range of medical services
          online. We offer high-quality doctor consultations through video calls, covering major cities like Hyderabad,
          Bangalore, Mumbai, and Delhi, with services for individuals of all age groups.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 w-[30em]">
          If you're looking to avoid frequent hospital visits, long wait times, or the hassle of traveling, APG’s
          online platform allows you to consult with doctors from the comfort of your home.
        </p>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-[#5183a2]">Our Top Consultations</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
          {[
            { title: "Pediatrician", img: Pediatrician, link: "pediatrician" },
            { title: "Orthopedician", img: Orthopedician, link: "orthopedic" },
            { title: "Physician", img: Physician, link: "general-physician" },
            { title: "Gynecologist", img: Gynecologist, link: "gynaecologist" },
            { title: "Urologist", img: Urologist, link: "urologist" },
            { title: "Pulmonologist", img: Pulmonologist, link: "pulmonologist" },
            { title: "Diabetologist", img: Diabetologist, link: "diabetologist" },
            { title: "Nephrologist", img: Nephrologist, link: "nephrologist" },
            { title: "Dentist", img: Dentist, link: "dental" },
          ].map((consultation, index) => (
            <Link to={consultation.link} key={index} className="p-3">
              <div className="text-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg">
                <img className="h-16 w-full object-contain mb-2 transform scale-150"src={consultation.img}alt={consultation.title}/>
                <p className="text-sm sm:text-base font-medium text-black">{consultation.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 p-4 shadow-md rounded-lg mt-6 mb-6">
          <Outlet />
        </div>
      </div>
      <div className=" p-6 h-[20em]">
        <h1 className="text-2xl font-bold mb-6 text-[#5183a2]">Why Choose Online Doctor Consultation?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Qualified Doctors", text: "Book an online appointment with the doctor", img: QualifiedDoctors },
            { title: "Fast Response", text: "Get a fast and speedy response from our App", img: FastResponse },
            { title: "Easy Checkups", text: "Our App is simple and easy to consult a doctor", img: EasyCheckups },
            { title: "Safe & Secure", text: "All your health records and reports will be secured", img: SafeSecure },
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition">
              <img className="h-16 w-16 mx-auto mb-3 object-contain transform scale-150"src={feature.img}alt={feature.title}/>
              <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
              <p className="text-sm sm:text-base text-[#5183a2]">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorConsultation;
