import React from 'react'
import EnquiryForm from './../EnquiryForm';

const DoctoratHome = () => {
  return (
    <section className="p-6 bg-gray-50 max-w-full mx-auto shadow-lg rounded-lg mt-6">
      <div className="text-left mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-8 mb-6">
          Get Professional<br />Doctor Consultation at Home
        </h1>
        <div className="mt-4 mb-12">
          <a  href="/contact" className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition duration-300">Book Now</a>
        </div>
      </div>

      <EnquiryForm/>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#5183a2] mb-4">Doctor Visit at Home</h2>
        <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-6 max-w-full sm:w-[30em] md:w-[40em] lg:w-[45em]">Doctor consultation at home has become essential for many, especially in these challenging times.  APG Health Solutions provides the best home doctor services at affordable rates. Our Doctor Consultation at Home connects you with professionally qualified doctors who care for your health. From the comfort of your home, you can explain your health concerns freely and conveniently. APG partners with experienced and verified physicians to guide you with the most suitable treatments for your health problems.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#5183a2] mb-4">Why Doctor Consultation at Home is Necessary?</h2>
        <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-6">
          Doctor consultation at home is ideal for those unable to travel due to health-related issues or 
          busy lifestyles. This service has transformed healthcare by saving time and effort. It benefits a 
          wide range of individuals, from pediatric to elderly patients and critically ill to post-surgery recovery 
          patients.
        </p>
        <ul className="list-disc pl-6 text-base sm:text-lg lg:text-lg text-gray-600 space-y-3">
          <li>Critically ill or bedridden patients</li>
          <li>Post-surgery recovery patients</li>
          <li>Better monitoring of your health and well-being</li>
          <li>Convenient scheduling at your preferred time</li>
          <li>Reduces the risk of contracting infectious diseases</li>
          <li>Minimizes the spread of COVID-19</li>
          <li>Saves time and energy</li>
          <li>Allows clear communication of health concerns</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#5183a2] mb-4">Advantages of Doctor Consultation at Home</h2>
        <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-6">APG's doctor consultation service ensures you can connect instantly and easily with the best physicians in India. Here’s why it’s beneficial:</p>
        <ul className="list-disc pl-6 text-base sm:text-lg lg:text-lg text-gray-600 space-y-3">
          <li>Affordable doctor home visit charges</li>
          <li>Reintroduces the concept of a family physician at home</li>
          <li>Convenient access to quality healthcare from experienced doctors</li>
          <li>Ideal for elderly individuals and those unable to travel</li>
          <li>Safe, contactless consultation during the coronavirus pandemic</li>
          <li>Time-saving and eliminates traffic-related stress</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#5183a2] mb-4">How APG Can Help with Doctor Consultation at Home</h2>
        <p className="text-base sm:text-lg lg:text-lg text-gray-600">At APG, your health is our priority. We are dedicated to providing quality and budget-friendly medical  services designed to meet your needs anytime, anywhere. Whether you need a routine check-up or assistance  with chronic health issues, APG's home doctor consultation ensures you’re in safe hands.</p>
      </div>

      <div className="text-left">
        <a  href="/contact" className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition duration-300">Call Us Today to Avail Your Service</a>
      </div>
    </section>
  );
};

export default DoctoratHome;
