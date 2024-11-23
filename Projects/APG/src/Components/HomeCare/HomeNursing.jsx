import React from 'react'
import EnquiryForm from './../EnquiryForm';

const HomeNursing = () => {
    return (
        <section className="p-6 bg-gray-50 max-w-[70em] shadow-lg rounded-lg mt-6">
          <div className="text-left mb-8 w-full sm:w-[35em]">
            <h1 className="text-4xl font-bold text-[#5183a2] mb-4 sm:text-3xl md:text-4xl">
              Home Nursing Services
            </h1>
            <p className="text-lg text-gray-600 mb-6 sm:text-base md:text-lg">
              APG provides Home Nursing Services across India. Our aim is to deliver nursing care equivalent to that found in a medical institution but in the comfort of your home. Our skilled and trained nurses are available 24/7 to meet your needs. If you're looking for nursing care in your area, please contact us.
            </p>
            <p className="text-lg text-gray-600 mb-6 sm:text-base md:text-lg">
              Nursing services at home may be medical or non-medical. Non-medical care includes geriatric, pediatric, and mother-and-child care. Medical care encompasses a variety of services such as suture removal, wound dressing, ventilator care, ostomy care, palliative care, injections, infusion therapy, and more. 
              APG Health Care Services offers short-term or long-term care based on your requirements. You can choose between hiring a full-time or part-time nurse, depending on your patient's needs.
            </p>
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
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 sm:text-2xl md:text-3xl">What Are the Different Types of Home Nursing Services Provided by APG?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 sm:text-base">
              <li>Nursing for vaccination</li>
              <li>Nursing for cancer</li>
              <li>Nursing for chemotherapy</li>
              <li>Nursing for immunotherapy</li>
              <li>Nursing for catheterization</li>
              <li>Nursing for infusion</li>
              <li>Nursing for nebulization</li>
              <li>Nursing for ICU care</li>
              <li>Nursing for esophageal cancer</li>
              <li>Nursing for lymphoma cancer</li>
              <li>Nursing for urinary catheterization</li>
              <li>Nursing for pancreatic cancer</li>
              <li>Nursing for cardiac catheterization</li>
              <li>Nursing for cervical cancer</li>
              <li>Nursing for brain cancer</li>
              <li>Nursing for kidney cancer</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 sm:text-2xl md:text-3xl">Benefits of Nurse at Home Services</h2>
            <p className="text-lg text-gray-600 mb-6 sm:text-base md:text-lg">
              Our Nurse at Home staff has extensive training and practical expertise in providing patients with guidance and support for maintaining their health. We create personalized diets and take every effort to restore patients to their optimal health.
            </p>
            <p className="text-lg text-gray-600 mb-6 sm:text-base md:text-lg">
              The main goal of home nursing care is to treat diseases or injuries at the patient’s home. Services include surgery wound care, patient and caregiver education, rehabilitation therapies, monitoring conditions, and handling unstable health statuses. Below are some of the homecare services we offer in Hyderabad:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 sm:text-base">
              <li>Feeding your loved ones</li>
              <li>Walking assistance and fall prevention</li>
              <li>Bathing, brushing teeth, and denture care</li>
              <li>Assistance with commode, bedpan, and urinal</li>
              <li>Dressing and grooming</li>
              <li>Diaper changing</li>
              <li>Bed sore prevention</li>
              <li>Timely medication reminders</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-[#5183a2] mb-4 sm:text-2xl md:text-3xl">Why Choose APG for Home Nursing Services?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 sm:text-base">
              <li>We provide quality care to ensure you make the most of our services.</li>
              <li>We partner with top hospitals, skilled nursing institutions, and medical professionals.</li>
              <li>We offer individualized treatment for seriously ill patients.</li>
              <li>Our services are available 24/7, depending on your needs.</li>
              <li>We follow strict safety guidelines and treat patients with respect and compassion.</li>
              <li>All caregivers are qualified, undergo background checks, and health inspections before offering services.</li>
            </ul>
          </div>
    
          <div className="text-left">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
        </section>
      );
    };

export default HomeNursing;
