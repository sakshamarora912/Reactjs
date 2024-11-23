import React from 'react'
import EnquiryForm from './../EnquiryForm';

const BabyCare = () => {
  return (
    <section className="p-6 bg-gray-50 max-w-[70em] mx-auto shadow-lg rounded-lg mt-6">
      <div className="text-left mb-8 max-w-xl">
        <h1 className="text-4xl font-bold text-[#5183a2] mb-4">Babysitting Services</h1>
        <p className="text-lg text-gray-600 mb-6">
          If you’re looking for babysitting services, you’ve come to the right place. The post-natal period is when newborns require the utmost care, and hiring a professional caretaker for babies is often the best choice. APG makes your baby’s daycare services accessible with just a few clicks. We have a specialist team of trained nurses who will provide expert care for your child.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Caring for a newborn at home is a demanding task, which is why engaging someone to look after both the mother and child is essential. After leaving the nursing home or hospital, you can immediately use our daycare services, which include trustworthy and attentive care for your baby. Handling a newborn requires sensitivity and care, and APG offers baby caretakers at home for comprehensive newborn care. Many mothers find it challenging to manage themselves and their baby during this transformative time, making our babysitting services a reliable solution for holistic care.
        </p>
        <div className="mt-4 mb-12">
          <a href="/contact" className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition duration-300">Book Now</a>
        </div>
      </div>

      <EnquiryForm/>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#5183a2] mb-4">Why Choose APG for Daycare Services?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
          <li>APG offers a wide range of services to help you find the best-rated and nearest options in your city or location.</li>
          <li>Get access to addresses, ratings, reviews, and detailed information about all listed alternatives.</li>
          <li>Start a conversation with babysitters directly through our website.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-[#5183a2] mb-4">What Are Daycare Services?</h2>
        <p className="text-lg text-gray-600 mb-6">
          APG provides various babysitting services tailored to meet the unique needs of your child. Our programs are designed to ensure the effective growth and care of your baby in a secure and nurturing environment. Here are some of the key services we offer:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
          <li>
            <strong>Overnight Baby Caretaker Services:</strong> 
            Our highly competent baby caretakers provide overnight babysitting services. All caretakers are thoroughly trained and assessed to meet the highest standards of newborn care at home, both physically and psychologically.
          </li>
          <li>
            <strong>24 Hours Babysitting Services:</strong> 
            A babysitter can stay at your residence to care for your baby round the clock, ensuring a comfortable and familiar environment for your child.
          </li>
          <li>
            <strong>Part-Time or Live-In Babysitting:</strong> 
            Temporary nannies are available for short-term needs, such as 3 to 4 weeks or even a few days. Part-time babysitting is ideal for parents seeking regular alone time while ensuring their child is well cared for.
          </li>
        </ul>
      </div>

      <div className="text-left">
        <a  href="/contact"  className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition duration-300">Book Now</a>
      </div>
    </section>
  );
};

export default BabyCare;
