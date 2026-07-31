import React from 'react';
import EnquiryForm from './../EnquiryForm';

const PatientCare = () => {
  return (
    <section className=" bg-gray-50 max-w-[70em] mx-auto shadow-lg rounded-lg mt-6">
      <div className="text-left mb-8">
        <h1 className="text-xl font-bold text-gray-800 mt-[5em] mb-[2em] text-center sm:text-left">
          Get Qualified Professional Nursing Services <br /> & Caretakers at Home
        </h1>
        <div className="mt-4 mb-12">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition">
                Book Now
              </a>
            </div>

        <EnquiryForm/>

      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 text-center sm:text-left">
          Patient Care Taker Services
        </h2>
        <p className="text-lg text-gray-600 mb-6 w-full sm:w-[35em] mx-auto sm:mx-0">
          Are you looking for reliable patient caretaker services at home? APG offers trusted and comprehensive
          patient care in Hyderabad, Bangalore, and Chennai. With experienced male and female caretakers, we
          ensure your loved ones receive medical and emotional support when they need it most. Call or chat with
          us to about our services and book your appointment today.
        </p>
        <p className="text-lg text-gray-600 w-full sm:w-[35em] mx-auto sm:mx-0">
          Whether due to demanding jobs, living in another city or country, or other unavoidable circumstances,
          you can now rest easy knowing APG is here to provide compassionate and skilled patient care services
          at home. Let us help take care of your loved ones with professionalism and empathy.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 text-center sm:text-left">
          Services Provided by Our Caretakers
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-600">
          <li>Covid-19 patient home care</li>
          <li>Post-operative patient care</li>
          <li>Palliative care services</li>
          <li>Cancer patient care</li>
          <li>Wound care and dressing</li>
          <li>Tracheostomy care</li>
          <li>Terminally ill patient care</li>
          <li>Post-hospitalization recovery</li>
          <li>Mother and newborn care</li>
          <li>Ventilator care</li>
          <li>IV administration and injections</li>
          <li>Urinary catheterization and bladder wash</li>
          <li>Vital signs monitoring</li>
          <li>Medication management</li>
          <li>Stoma care</li>
          <li>Vaccine administration</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 text-center sm:text-left">
          Why Choose APG for Patient Care Services?
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-600">
          <li>Experienced and compassionate caretakers</li>
          <li>Collaboration with top physicians and hospitals</li>
          <li>Personalized attention for critical patients</li>
          <li>24/7 services available based on your needs</li>
          <li>Strict adherence to safety and hygiene protocols</li>
          <li>Comprehensive background verification of caretakers</li>
          <li>Affordable, quality-focused home care</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 text-center sm:text-left">
          Additional Services Offered by APG
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Stroke Care</h3>
            <p className="text-lg text-gray-600">
              Recovering from a stroke can be challenging. Our expert caretakers provide specialized stroke care,
              ensuring a comfortable and supportive recovery process.
            </p>
            <a href="" className="text-[#5183a2] hover:underline mt-2 inline-block">
              Book Now
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Post-Surgery Care</h3>
            <p className="text-lg text-gray-600">
              Post-surgical care involves pain management, feeding, and respiratory support. Having a skilled
              nurse by your side during recovery is crucial for proper healing.
            </p>
            <a href="" className="text-[#5183a2] hover:underline mt-2 inline-block">
              Book Now
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Suture Removal</h3>
            <p className="text-lg text-gray-600">
              Avoid hospital visits for suture removal. Our expert nurses provide this service conveniently at
              your home.
            </p>
            <a href="" className="text-[#5183a2] hover:underline mt-2 inline-block">
              Book Now
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Bladder Wash</h3>
            <p className="text-lg text-gray-600">
              APG’s team offers professional urinary catheterization care, including catheter insertion, removal,
              and bladder wash services.
            </p>
            <a href="" className="text-[#5183a2] hover:underline mt-2 inline-block">
              Book Now
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Wound Dressing</h3>
            <p className="text-lg text-gray-600">
              Proper wound care is essential for healing. Our skilled nurses manage various types of wounds,
              including surgical wounds and pressure sores.
            </p>
            <a href="" className="text-[#5183a2] hover:underline mt-2 inline-block">
              Book Now
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Medical Equipment</h3>
            <p className="text-lg text-gray-600">
              APG provides medical equipment for emergencies, including pulse oximeters, oxygen concentrators,
              and smart peak flow meters.
            </p>
            <a href="" className="text-[#5183a2] hover:underline mt-2 inline-block">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientCare;
