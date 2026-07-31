import React from 'react';
import EnquiryForm from './../EnquiryForm';

const MRIScan = () => {
  return (
    <section className="p-6 bg-white max-w-[70em] mx-auto">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 mt-20 text-[#5183a2]">MRI Scan Cost</h1>
      <p className="text-md sm:text-[1em] mb-6 w-[30em]">
        APG offers MRI scans at ISO and NABL certified labs. Book now for a safe and precise diagnostic imaging experience.
      </p>
      <div className="text-left mb-12">
        <a href="https://apg.com/book-now" className="px-6 py-3 bg-[#5183a2] text-white rounded-md hover:bg-blue-700">Book Now</a>
      </div>

      <EnquiryForm/>
      
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#5183a2]">What is an MRI Scan?</h2>
      <p className="text-lg sm:text-xl mb-6">
        An MRI scan is a non-invasive diagnostic test used to assess soft tissue structures in the body. It provides highly detailed imaging for various parts of the body and helps doctors diagnose and understand different medical conditions. Using magnetic fields and radio waves, MRI scans offer a safe and precise way to visualize the anatomy of internal organs.
      </p>
      
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#5183a2]">Types of MRI Scans</h3>
      <p className="text-lg sm:text-xl mb-6">
        MRI scans can vary depending on the specific tissues or organs being examined. Here are the different types of MRI scans:
      </p>
      <ul className="list-disc pl-6 text-lg sm:text-base mb-6">
        <li><strong>T1 Weighted Image:</strong> Excellent for visualizing tissue structures.</li>
        <li><strong>T2 Weighted Image:</strong> Highlights water distribution in tissues.</li>
        <li><strong>Functional Brain MRI:</strong> Tracks brain activity based on blood oxygen levels.</li>
        <li><strong>Magnetic Resonance Angiography:</strong> Detects blood vessel anomalies like aneurysms, ruptures, and blockages.</li>
        <li><strong>Magnetic Resonance Spectroscopy:</strong> Monitors brain molecules to track diseases.</li>
        <li><strong>Magnetic Resonance Echocardiography:</strong> Assesses the bile duct system and diagnoses conditions like gallstones.</li>
        <li><strong>Diffusion-Weighted MRI:</strong> Tracks water movement in tissues to detect strokes or hemorrhages.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#5183a2]">Benefits of an MRI Scan</h3>
      <p className="text-lg sm:text-xl mb-6">
        MRI scans are known for their safety and precision. Here are the benefits:
      </p>
      <ul className="list-disc pl-6 text-lg sm:text-base mb-6">
        <li><strong>Safe:</strong> MRI uses non-ionizing magnetic fields and radio waves, posing no risk to the body.</li>
        <li><strong>Non-Invasive:</strong> No incisions or needles are involved in the imaging process.</li>
        <li><strong>Detailed Imaging:</strong> MRI provides an in-depth view of tissues, helping doctors detect even the smallest lesions.</li>
        <li><strong>Versatile:</strong> It can be used for diagnosing various conditions across different parts of the body.</li>
        <li><strong>Functional Studies:</strong> MRI is useful for studying functional aspects of organs, like brain activity, which isn't visible with X-rays or CT scans.</li>
        <li><strong>Pre-Surgery Planning:</strong> MRI helps in assessing a diseased area before surgery, aiding in better treatment planning.</li>
      </ul>

      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#5183a2]">Where can you get an MRI Scan?</h3>
      <p className="text-lg sm:text-xl mb-6">
        APG provides MRI scans at certified labs across the country, ensuring that you receive top-notch, reliable results.
      </p>
      
    </section>
  );
};

export default MRIScan;
