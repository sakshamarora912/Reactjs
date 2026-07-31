import React from "react";
import EnquiryForm from './../EnquiryForm';

const GeneralPhysician = () => {
  return (
    <section>
      <div className="p-6 bg-gray-50">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Online General Physician Consultation</h1>
        <p className="text-base md:text-lg mb-6 md:w-2/3 lg:w-1/2">
          According to the present condition, India has completely gone into lockdown, and many people are fearing going to the hospitals. As we are part of the healthcare service provider, we designed the APG App for a secure online video consultation with doctors. You can download our app from the Play Store and book an appointment with general physicians. We provide the best general physicians who are working in big reputed hospitals. If you notice flu-like symptoms, they can range from mild to severe with COVID-19. So, clean surfaces with disinfectant cleaners to prevent the potential risk of spreading the infection and monitor your symptoms daily to report to a general physician.
        </p>
        <button className="mt-4  mb-12 px-6 py-2 bg-[#5183a2] text-white text-sm md:text-base font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-300">
          Book Now
        </button>

        <EnquiryForm/>

      </div>

      <div className="p-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">What is the work of a general physician?</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg mb-6">
            A general physician treats a wide range of medical conditions at the initial level. They assess your health concerns, offer preventive healthcare advice, and guide you on various medical conditions. Remember, timely contact with a physician is the first step to prompt treatment. Our experienced doctors are among India’s top general physicians, providing primary care and recommending preventive measures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GeneralPhysician;
