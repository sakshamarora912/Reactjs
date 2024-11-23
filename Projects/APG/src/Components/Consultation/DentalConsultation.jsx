import React from "react";
import EnquiryForm from './../EnquiryForm';

const Dental = () => {
  return (
    <section className="bg-white max-w-[70em] mx-auto shadow-lg rounded-lg mt-6 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-[#5183a2] text-2xl md:text-4xl font-extrabold mb-4 text-left">Online Dental Consultation</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 text-left md:w-2/3 lg:w-1/2 ">
          Take charge of your dental health from the comfort of your home with APG’s expert online consultations. 
          Our experienced dentists are here to help you maintain a healthy smile and prevent dental issues.
        </p>
        <div className="text-left mb-12">
          <a href="./"className="px-6 mb-12 py-3 md:px-8 md:py-4 bg-[#5183a2] text-white text-sm md:text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Book Now
          </a>
        </div>

        <EnquiryForm/>
        
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#5183a2] mb-4">When Should I Consult a Dentist?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            It’s advisable to consult a dentist twice a year for adults, and for children, a visit is recommended at least once a month. 
            If you notice symptoms such as sensitivity, bleeding gums, toothache, or bad breath, it’s time to book an appointment. 
            People with diabetes often face recurring oral health issues, and excellent dental care can help minimize tooth-related pain.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#5183a2] mb-4">What Does a Dental Specialist Treat?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Dental care addresses diseases and conditions that affect the functioning of the mouth. 
            APG provides access to the best dental specialists who will treat and examine any dental issues you may be facing. 
            Our experienced dentists are equipped to handle a variety of conditions.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#5183a2] mb-4">Specializations of Dentists</h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">At APG, we provide specialists to ensure that your oral health receives the best care possible. Our dental services cover a wide range of specialties, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-600">
            <li>General Dentist</li>
            <li>Periodontist</li>
            <li>Endodontist</li>
            <li>Orthodontist</li>
            <li>Prosthodontist</li>
            <li>Oral and Maxillofacial Radiologist</li>
            <li>Oral and Maxillofacial Surgeon</li>
            <li>Dental Hygienist</li>
            <li>Dental Assistant</li>
            <li>Pediatric Dentist (Pedodontist)</li>
            <li>Dental Fillings</li>
            <li>Root Canal Treatment</li>
            <li>Wisdom Tooth Removal</li>
            <li>Braces and Aligners</li>
            <li>Dental Implants</li>
            <li>Clear Aligners</li>
            <li>Denture</li>
            <li>Bridges and Crowns</li>
            <li>Teeth Whitening</li>
            <li>Smile Makeover</li>
            <li>Kids Dentistry</li>
            <li>Mouth Ulcers</li>
            <li>Preventive Dentistry</li>
            <li>Advanced Gum Treatment</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#5183a2] mb-4">Why Choose APG?</h3>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-600">
            <li>APG provides quality dental services with experienced dentists who can effectively solve your dental problems.</li>
            <li>Your safety is our priority. APG offers safe and secure services.</li>
            <li>We ensure sterilization of all equipment after each visit for your safety.</li>
            <li>APG uses advanced technology to provide top-notch dental care and solve your dental issues.</li>
            <li>Our dentists are highly qualified and experienced, ensuring you receive the best care possible.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="https://apg.com"
          className="px-6 py-3 md:px-8 md:py-4 bg-[#5183a2] text-white text-sm md:text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Book Your Appointment Now
        </a>
      </div>
    </section>
  );
};

export default Dental;
