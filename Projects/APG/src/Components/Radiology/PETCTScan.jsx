import React from 'react';
import EnquiryForm from './../EnquiryForm';


const PETCTScan = () => {
  return (
    <section className="p-6 bg-white max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">PET CT Scan in India</h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        Looking for advanced medical diagnostic services in India? APG offers affordable PET CT Scans at top-rated facilities across the country. With the latest technology, our scans can help detect early signs of cancer, heart disease, and other health conditions. Our team of professional specialists ensures a smooth and comfortable experience throughout your PET CT Scan process. Book your appointment with us today and take the first step towards better health.
      </p>
      <div className="text-center mb-6">
        <a href="https://APG.com/book-now" className="px-6 py-3 bg-[#5183a2] text-white rounded-md hover:bg-blue-700">Book Now</a>
      </div>

      <EnquiryForm/>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">What Is A PET Scan?</h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        PET CT scanning combines Positron Emission Tomography (PET) and Computed Tomography (CT) to produce detailed images of metabolic activity and structural features inside the body. By injecting a radioactive tracer, the PET scan detects diseased cells, helping diagnose conditions like cancer, heart disease, and brain disorders. This imaging procedure typically takes between 30 to 60 minutes.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Why Is A PET CT Scan Done?</h3>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        PET CT scans are essential for diagnosing and monitoring various health conditions, such as:
      </p>
      <ul className="list-disc pl-6 text-lg sm:text-xl mb-6">
        <li>Detecting cancerous tumors, assessing their size, location, and spread (staging).</li>
        <li>Evaluating blood flow to organs, which helps diagnose heart disease and stroke.</li>
        <li>Assessing brain function for disorders like Alzheimer’s, Parkinson’s, and epilepsy.</li>
        <li>Monitoring response to cancer treatments like chemotherapy and radiation.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Preparation for a PET CT Scan</h3>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        Proper preparation ensures the accuracy of your PET scan results. Here are some essential guidelines:
      </p>
      <ul className="list-disc pl-6 text-lg sm:text-xl mb-6">
        <li>Fast for 4 to 6 hours before the scan, but you can drink water.</li>
        <li>Avoid intense exercise for 24 hours before the scan.</li>
        <li>If you have diabetes or cannot fast, contact us for assistance.</li>
        <li>Inform us if you have claustrophobia so we can accommodate you.</li>
        <li>Wear loose, comfortable clothes without metal zippers or buckles.</li>
        <li>Inform your healthcare provider about any medications or supplements you’re taking.</li>
        <li>Avoid caffeine or alcohol for at least 24 hours prior to the scan.</li>
        <li>Arrive early to complete registration and bring any relevant medical records.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Book Your PET CT Scan</h3>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        Scheduling a PET CT scan is easy with APG. Our top-rated facilities are equipped with advanced technology to provide accurate and timely results. Book your scan now to ensure your health is in good hands.
      </p>
      <div className="text-center mb-6">
        <a href="https://APG.com/book-now" className="px-6 py-3 bg-[#5183a2] text-white rounded-md hover:bg-blue-700">Book Now</a>
      </div>
    </section>
  );
};

export default PETCTScan;
