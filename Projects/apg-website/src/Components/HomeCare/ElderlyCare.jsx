import React from 'react'
import EnquiryForm from './../EnquiryForm';

const ElderlyCare = () => {
    return (
        <section className="p-6 bg-gray-50 max-w-screen-lg mx-auto shadow-lg rounded-lg mt-6">
          <div className="text-left mb-8">
            <h1 className="text-xl font-bold text-gray-800 mt-16 mb-8 sm:text-2xl md:text-3xl">
              Get Qualified Professional<br /> Nursing Services & Elderly Care at Home
            </h1>
            <div className="mt-4 mb-12">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition">
                Book Now
              </a>
            </div>
          </div>
          
          <EnquiryForm/>
    
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4">Elderly Care Service</h2>
            <p className="text-lg text-gray-600 mb-6 sm:w-full md:w-[35em] lg:w-[40em]">
              Elderly care is a specialized health care service provided to senior citizens to assist their well-being. 
              APG offers elderly care services tailored to meet older adults’ diverse needs, from physical disabilities 
              to chronic diseases, at affordable prices. If you’re looking for professional care for your elderly loved ones, 
              APG is here to help.
            </p>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4">
              Why Should We Have Elderly Care Services at Home?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Caring for senior citizens in today’s fast-paced world can be challenging for families. 
              Elderly individuals require focused attention and holistic care, which family members might 
              not always be able to provide due to their busy schedules. Professional elderly care services at home 
              ensure that senior citizens receive the attention they deserve, fulfilling their daily needs.
            </p>
            <p className="text-lg text-gray-600">
              Elder care includes:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Assisted living (personal and medical level of care)</li>
              <li>Adult daycare (transitional care and companionship)</li>
              <li>Nursing care (monitoring health issues)</li>
              <li>
                Home care assistance (daily activities like bathing, dressing, grooming, diet planning, and hygiene)
              </li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4">Why is Elder Care Necessary?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Elderly people often need empathic care, love, and companionship to lead a healthy, dignified life. 
              As age progresses, they may face health complications like blood pressure, diabetes, strokes, arthritis, 
              and cognitive issues such as dementia or Alzheimer’s. Emotional and physical challenges further emphasize 
              the need for elderly care services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Professional elder care services at home help address:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Emotional support to combat loneliness, neglect, and irritability</li>
              <li>Physical assistance with daily activities and managing chronic conditions</li>
              <li>
                Cognitive care to tackle issues like memory loss, difficulty in communication, and reduced attention span
              </li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4">Why Choose APG for Elderly Care Services?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Comprehensive elderly care services tailored to physical and mental health needs</li>
              <li>Experienced and qualified caretakers ensuring holistic support for your loved ones</li>
              <li>Access to video and tele-consultation with top doctors for quick solutions</li>
              <li>Seamless doctor-patient interaction for improved care at home</li>
              <li>
                Fast response to health queries, convenient at-home medical check-ups, and secure health records
              </li>
              <li>
                Reliable care for critically-ill, bedridden, and post-surgery recovery patients
              </li>
            </ul>
          </div>
    
          <div className="text-left">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition">
              Call Us Today to Avail Your Service
            </a>
          </div>
        </section>
      );
    };
    

export default ElderlyCare
