import React from 'react';
import EnquiryForm from './../EnquiryForm';

const Pulmonologist = () => {
  return (
    <section className="p-6 bg-white">
      <div className="max-w-[70em] mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-[#5183a2]">Online Pulmonologist Consultation</h1>
        <p className="text-lg mb-6 max-w-xl">Pulmonary and lung issues have become more common in recent times. Pulmonologists are specialists who treat these conditions. However, finding the right pulmonologist can be a challenge for those who aren't familiar with the field of pulmonary care. In this article, we’ll cover important factors to consider when looking for the best online pulmonologist in India to ensure that your pulmonary issues are treated effectively.</p>
        <button className="px-6 mb-12 py-2 bg-[#487490] text-white rounded-lg shadow hover:bg-[#5183a2] transition-all duration-300">Book Now</button>
        <EnquiryForm/>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#5183a2]">Why Choose APG for Online Pulmonologist Consultation?</h2>
        <ul className="list-disc pl-6 text-lg mb-6 space-y-2">
          <li><strong>Expert Care:</strong> APG connects you with the best pulmonologists across India, offering you top-notch online consultation services.</li>
          <li><strong>Safety First:</strong> We adhere to all safety guidelines and treat each patient with the utmost care and respect, ensuring the best possible outcomes.</li>
          <li><strong>Trusted Partnerships:</strong> We have established partnerships with leading hospitals, experienced doctors, and medical professionals.</li>
          <li><strong>Convenient Report Delivery:</strong> We send your medical reports via email, allowing easy access and download of your important documents.</li>
          <li><strong>Data Security:</strong> All your medical data, including reports and prescriptions, are securely stored and protected.</li>
        </ul>
      </div>
    </section>
  );
};

export default Pulmonologist;
