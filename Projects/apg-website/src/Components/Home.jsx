import React from 'react';
import { Link } from 'react-router-dom';
import OnlineConsultation from '../assets/doctorConsultation.png';
import DoctorAtHome from '../assets/DoctorAtHome.jpg';
import NurseAtHome from '../assets/NurseAtHome.jpg';
import Physio from '../assets/Physio.jpg';
import InvestigationsAtHome from '../assets/InvestigationsAtHome.jpg';
import MedicalEquipment from '../assets/MedicalEquipment.jpg';
import ElderlyCare from '../assets/ElderlyCare.jpg';
import HomeopathyTreatment from '../assets/HomeopathyTreatment.jpg';
import NaturopathyTreatment from '../assets/NaturopathyTreatment.jpg';
import Pediatrician from '../assets/Pediatrician.jpg';
import Orthopedician from '../assets/Orthopedician.jpg';
import Physician from '../assets/Physician.jpg';
import Gynecologist from '../assets/Gynecologist.jpg';
import Urologist from '../assets/Urologist.jpg';
import Pulmonologist from '../assets/Pulmonologist.jpg';
import Diabetologist from '../assets/Diabetologist.jpg';
import Nephrologist from '../assets/Gynecologist.jpg';
import Dentist from '../assets/Dentist.jpg';
import MRIScan from '../assets/MRIScan.jpg';
import ECG from '../assets/ECG.jpg';
import XRay from '../assets/XRay.jpg';
import CTScan from '../assets/CTScan.jpg';
import Ultrasound from '../assets/Ultrasound.jpg';
import ExperiencedHealthcareProviders from '../assets/ExperiencedHealthcareProviders.jpg';
import PatientCenteredCare from '../assets/PatientCenteredCare.jpg';
import StateoftheArtFacilities from '../assets/StateoftheArtFacilities.jpg';

import bg_image_01 from '../assets/apg-005.jpg' 
import EnquiryForm from './EnquiryForm';
// import MedicalEquipment from './MedicalEquipment';
import Diagnostics from './Diagnostics';
import PatientCare from './HomeCare/PatientCare';

const consultations = [
  { title: "Pediatrician", img: Pediatrician, link: "pediatrician" },
  { title: "Orthopedician", img: Orthopedician, link: "orthopedician" },
  { title: "Physician", img: Physician, link: "general-physician" },
  { title: "Gynecologist", img: Gynecologist, link: "gynecologist" },
  { title: "Urologist", img: Urologist, link: "urologist" },
  { title: "Pulmonologist", img: Pulmonologist, link: "pulmonologist" },
  { title: "Diabetologist", img: Diabetologist, link: "diabetologist" },
  { title: "Nephrologist", img: Nephrologist, link: "nephrologist" },
  { title: "Dentist", img: Dentist, link: "dentist" }
];

const services = [
  { title: "Online Consultation", desc: "Lorem ipsum dolor sit amet.", img: OnlineConsultation },
  { title: "Doctor at Home", desc: "Lorem ipsum dolor sit amet.", img: DoctorAtHome },
  { title: "Nurse at Home", desc: "Lorem ipsum dolor sit amet.", img: NurseAtHome },
  { title: "Physio at Home", desc: "Lorem ipsum dolor sit amet.", img: Physio },
  { title: "Investigations At Home", desc: "Lorem ipsum dolor sit amet.", img: InvestigationsAtHome },
  { title: "Medical Equipment at Home", desc: "Lorem ipsum dolor sit amet.", img: MedicalEquipment },
  { title: "Elderly Care", desc: "Lorem ipsum dolor sit amet.", img: ElderlyCare },
  { title: "Homeopathy Treatment", desc: "Lorem ipsum dolor sit amet.", img: HomeopathyTreatment },
  { title: "Naturopathy Treatment", desc: "Lorem ipsum dolor sit amet.", img: NaturopathyTreatment },
];

const radiology = [
  { title: "MRI Scan", img: MRIScan },
  { title: "CT Scan", img: CTScan },
  { title: "ECG", img: ECG },
  { title: "Ultrasound", img: Ultrasound },
  { title: "X-Ray", img: XRay },
];

const values = [
  { title: "Compassion", desc: "Treat every patient with empathy and kindness." },
  { title: "Excellence", desc: "Strive for excellence in medical care and patient experience." },
  { title: "Integrity", desc: "Uphold the highest ethical standards in all our practices." },
  { title: "Innovation", desc: "Embrace innovative technologies and approaches to healthcare." },
];

const reasons = [
  { title: "Experienced Healthcare Providers", desc: "Qualified healthcare professionals.", img: ExperiencedHealthcareProviders },
  { title: "Patient-Centered Care", desc: "Prioritize patients' comfort.", img: PatientCenteredCare },
  { title: "State-of-the-Art Facilities", desc: "Advanced technologies and facilities.", img: StateoftheArtFacilities },
];

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

    <section class="py-8 h-[25em] bg-left bg-white bg-no-repeat bg-x" style={{ backgroundImage: `url(${bg_image_01})`,backgroundPositionX:'5em' }}>
      <div class="max-w-[20em] ml-[45em] bg-white p-6 rounded-lg shadow-md bg-cover">
        <h1 class="text-2xl font-bold text-[#5183a2] mb-6 text-center">Enquire Now</h1>
        <div class="space-y-4">
          <input type="text"  placeholder="Your Name"  class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="number"  placeholder="Your Phone No."  class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <select id="city" name="city" aria-label="Select City" class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select City</option>
            <option value="Alipur">Alipur</option>
            <option value="Bawana">Bawana</option>
            <option value="Central Delhi">Central Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Deoli">Deoli</option>
            <option value="East Delhi">East Delhi</option>
            <option value="Karol Bagh">Karol Bagh</option>
            <option value="Najafgarh">Najafgarh</option>
            <option value="Nangloi Jat">Nangloi Jat</option>
            <option value="Narela">Narela</option>
            <option value="New Delhi">New Delhi</option>
            <option value="North Delhi">North Delhi</option>
            <option value="North East Delhi">North East Delhi</option>
            <option value="North West Delhi">North West Delhi</option>
            <option value="Pitampura">Pitampura</option>
            <option value="Rohini">Rohini</option>
            <option value="South Delhi">South Delhi</option>
            <option value="South West Delhi">South West Delhi</option>
            <option value="West Delhi">West Delhi</option>
          </select>
          
          <select id="service" name="service" aria-label="Select Service" class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Choose a Service</option>
            <option value="BabyCare">Baby Care</option>
            <option value="ElderlyCare">Elderly Care</option>
            <option value="PatientCare">Patient Care</option>
            <option value="DoctorAtHome">Doctor At Home</option>
            <option value="Consultation">Consultation</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="MedicalEquipment">Medical Equipment</option>
          </select>
        </div>
      </div>
    </section>

      <section className="flex flex-wrap justify-center gap-4 py-12  md:px-20">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-[12em] md:w-[15em] lg:w-[18em] text-center px-3 py-6 bg-white shadow-md rounded-lg">
            <img className="h-16 mx-auto mb-3 transform scale-150" src={service.img} alt={service.title} />
            <h1 className="text-lg font-semibold mb-2">{service.title}</h1>
            <p className="text-sm text-[#487490]">{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="text-left mb-12 md:px-20">
        <h1 className="text-4xl font-bold mb-6 text-[#5183a2]">About APG Enterprises</h1>
        <p className="text-lg max-w-xl">
          A trusted healthcare provider dedicated to delivering exceptional medical care and wellness services to our community.
          Our mission is to provide compassionate healthcare, promote wellness, and improve quality of life for all our patients.
        </p>
      </section>

      <section className=' md:px-20'>
        <h1 className="text-2xl font-bold mb-6 text-[#5183a2]">Our Top Consultations</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {consultations.map((consultation, index) => (
            <Link key={index} to={`doctor-consultation/${consultation.link}`}>
              <div className="w-[8em] text-center px-3 py-4 bg-white shadow-md rounded-lg transition transform hover:scale-105">
                <img className="h-12 mx-auto mb-2 transform scale-150" src={consultation.img} alt={consultation.title} />
                <p className="text-md font-medium text-black">{consultation.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10  md:px-20">
        <h1 className="text-2xl font-bold mb-6 text-[#5183a2]">Radiology Services</h1>
        <div className="flex flex-wrap gap-4">
          {radiology.map((service, index) => (
            <div key={index} className="w-[8em] text-center px-3 py-4 bg-white shadow-md rounded-lg">
              <img className="h-12 mx-auto mb-2 transform scale-150" src={service.img} alt={service.title} />
              <p className="text-md font-medium">{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10  md:px-20">
        <h1 className="text-2xl font-bold mb-6 text-[#5183a2]">Our Values</h1>
        <div className="flex flex-wrap gap-4">
          {values.map((value, index) => (
            <div key={index} className="w-full sm:w-[12em] md:w-[15em] lg:w-[18em] text-center px-3 py-4 bg-white shadow-md rounded-lg">
              <h1 className="text-lg font-semibold mb-2">{value.title}</h1>
              <p className="text-sm text-[#487490]">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 h-[16em]  md:px-20 ">
        <h2 className="text-2xl font-bold mb-6 text-[#5183a2]">Why Choose Us?</h2>
        <div className="flex flex-wrap gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="w-full sm:w-[12em] md:w-[15em] lg:w-[18em] text-center px-3 py-4 bg-white shadow-md rounded-lg">
              <img className="h-12 mx-auto mb-2 transform scale-150" src={reason.img} alt={reason.title} />
              <h1 className="text-lg font-semibold mb-2">{reason.title}</h1>
              <p className="text-sm text-[#487490]">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
