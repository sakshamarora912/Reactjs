import React from 'react';
import EnquiryForm from './../EnquiryForm';


const XRayAtHome = () => {
  return (
    <section className="p-6 bg-white max-w-[75em] mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-2xl font-semibold mb-4 text-[#5183a2]">X-Ray At Home</h1>
      <p className="text-lg sm:text-xl md:text-base mb-6 w-[30em]">
        Get your X-ray done in the comfort of your home with APG’s X-Ray at Home services. Available in major cities like Hyderabad, Bangalore, Mumbai, Pune, and across India, we bring advanced diagnostic services directly to you. Avoid long waiting times and the hassle of visiting diagnostic centers. APG ensures high-quality X-ray services with the best equipment and skilled technicians at your doorstep.
      </p>
      <div className="text-left mb-12">
        <a href="https://APG.com/book-now" className="px-6 py-3 bg-[#5183a2] text-white rounded-md hover:bg-[#395a6f]">
          Book Now
        </a>
      </div>

      <EnquiryForm/>

      <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-4 text-[#5183a2]">Why Choose X-Ray At Home?</h2>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        With APG, you can get X-ray tests done in the comfort of your own home, saving you time and effort. We provide X-ray services for various body parts, including the chest, arms, legs, hips, and shoulders. Our portable X-ray machines are safe, well-maintained, and operated by qualified technicians who ensure your comfort throughout the procedure.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#5183a2]">X-Ray Services We Offer</h3>
      <ul className="list-disc pl-6 text-lg sm:text-base mb-6">
        <li>Chest X-ray</li>
        <li>Arm X-ray</li>
        <li>Hip X-ray</li>
        <li>Leg X-ray</li>
        <li>Shoulder X-ray</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#5183a2]">Affordable and Convenient</h3>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        APG offers X-ray at home at affordable prices, ensuring that you don’t have to worry about expensive diagnostic tests. The X-ray report and film will be delivered to your home, and you can also access it online for your convenience.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#5183a2]">Radiation Safety</h3>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        It’s common to have concerns about radiation exposure during an X-ray. However, the radiation used in X-ray procedures is generally low and the benefits outweigh the risks. Exposure depends on the body part being examined and varies with age, as children are more sensitive to radiation than adults. If you are pregnant, please inform your healthcare provider before undergoing an X-ray. Your doctor may recommend alternative options like an ultrasound scan.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#5183a2]">How To Book Your X-Ray</h3>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        Booking your X-ray at home is easy with APG. Simply visit the APG app or website to schedule your X-ray appointment. Our technician will arrive at your home at your convenience and perform the test safely and efficiently.
      </p>
    </section>
  );
};

export default XRayAtHome;
