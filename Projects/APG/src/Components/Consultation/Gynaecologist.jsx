import React from "react";
import EnquiryForm from './../EnquiryForm';

const Gynaecologist = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="max-w-[70em] mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Online Gynaecologist Consultation</h1>
        <p className="text-base md:text-lg mb-6 md:w-2/3 lg:w-1/2">
          Due to the ongoing situation, many people hesitate to visit the hospital, especially those experiencing gynaecological issues like irregular periods, signs of early menopause, pregnancy complications, and more.{" "}
          <strong>APG</strong> offers online gynaecologist consultations through our app, providing expert care and helping prevent potential health problems. By using our app, you can connect with top gynaecologists from the best hospitals, schedule appointments quickly, and discuss your concerns through video consultations.
        </p>
        <button className="mt-4 mb-12 px-6 py-2 bg-[#5183a2] text-white text-sm md:text-base font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-300">
          Book Now
        </button>

        <EnquiryForm/>

        <p className="text-base md:text-lg mb-6 mt-6">
          <strong className="text-[#5183a2]">Online Gynaecologist Consultation</strong>
          <br />
          If you're struggling with fertility or experiencing issues during your menstrual cycle, it's essential to consult with a gynaecologist immediately. Our gynaecologists support women in managing their health and guide them through maintaining a healthy pregnancy cycle. Along with offering general health advice, they specialize in addressing specific issues like menstrual irregularities and pregnancy health. We also have female specialists on hand to ensure a comfortable environment for discussing sensitive matters.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-[#5183a2]">What Cases Do Gynecologists Treat?</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>Menstrual Problems</li>
          <li>Thyroid Issues</li>
          <li>Missed Periods</li>
          <li>Breast Abnormalities</li>
          <li>Pregnancy Planning</li>
          <li>Women's Health & Hygiene Advice</li>
          <li>Preventive Care</li>
        </ul>

        <p className="text-base md:text-lg mb-6">
          Don’t waste time going to the hospital. With{" "}
          <strong>APG</strong>, you can book an online video consultation with experienced gynaecologists. Simply download our app and book an appointment to discuss your health concerns freely with our specialists.
        </p>
      </div>
    </section>
  );
};

export default Gynaecologist;
