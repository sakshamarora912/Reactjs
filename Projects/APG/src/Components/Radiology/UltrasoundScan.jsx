import React from 'react';
import EnquiryForm from './../EnquiryForm';


const UltrasoundScan = () => {
  return (
    <section className="p-6 bg-white max-w-[75em] mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-2xl font-semibold mb-4 text-[#5183a2] w-[30em]">Ultrasound Scan (Sonography) Centers in India</h1>
      <p className="text-lg sm:text-xl md:text-base mb-6 w-[30em]">
        Looking for an affordable and reliable ultrasound scan? APG partners with top-rated ultrasound centers across India to provide accurate and affordable ultrasound scans. Whether you're looking for obstetric, abdominal, pelvic, or specialized scans like breast and musculoskeletal ultrasounds, we have you covered. Book your ultrasound scan today and get fast results at nearby centers.
      </p>
      <div className="text-left mb-12">
        <a href="https://APG.com/book-now" className="px-6 py-3 bg-[#5183a2] text-white rounded-md hover:bg-blue-700">Book Now</a>
      </div>

      <EnquiryForm/>

      <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-4 text-[#5183a2]">What is an Ultrasound Scan?</h2>
      <p className="text-lg sm:text-base md:text-base mb-6">
        An ultrasound scan uses high-frequency sound waves (ultrasound waves) to create images of the internal organs and soft tissue structures. It is a commonly used imaging technique that helps doctors assess a wide variety of conditions. The ultrasound probe emits sound waves, which bounce back from the tissue and are converted into an image on the monitor. Ultrasound is useful in examining organs like the heart, liver, kidneys, uterus, and even blood vessels.
      </p>

      <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mb-4 text-[#5183a2]">Why Get an Ultrasound Scan?</h3>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        Ultrasound scans help doctors examine different parts of your body for conditions like gallstones, kidney stones, pregnancy-related issues, and more. It's commonly used for monitoring the fetus during pregnancy, checking for abnormalities, and assessing various internal organs.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Conditions Diagnosed with Ultrasound</h3>
      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Gallstones</li>
        <li>Varicose Veins</li>
        <li>Renal Stones</li>
        <li>Pancreatitis</li>
        <li>Intestinal Obstruction</li>
        <li>Lipoma</li>
        <li>Fetal Abnormalities</li>
        <li>Placenta Condition</li>
        <li>Deep Venous Thrombosis (DVT)</li>
        <li>Muscle and Ligament Injuries</li>
        <li>Appendicitis</li>
        <li>Septic Arthritis</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Ultrasound vs. Sonography</h3>
      <p className="text-base sm:text-base md:text-base mb-6">
        An ultrasound refers to the process of using sound waves to generate an image of the body’s internal structures. A sonogram, on the other hand, is the actual image produced by the ultrasound. The terms are often used interchangeably, but sonography is the process, and the sonogram is the image.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Why Choose APG for Your Ultrasound Scan?</h3>
      <p className="text-base sm:text-base md:text-base mb-6">
        APG is a trusted name in healthcare services, offering affordable and efficient ultrasound scans across India. With partnerships with top-rated ultrasound centers, we ensure high-quality scans performed by experienced radiologists. Your results are available online in as little as 30 minutes, and you can book your ultrasound conveniently through APG.
      </p>

      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Quick and affordable ultrasound scans</li>
        <li>Experienced radiologists with detailed analysis</li>
        <li>Online results within 30 minutes</li>
        <li>24/7 customer support</li>
        <li>Easy booking for abdominal, pelvic, soft tissue, and prenatal ultrasounds</li>
      </ul>
    </section>
  );
};

export default UltrasoundScan;
