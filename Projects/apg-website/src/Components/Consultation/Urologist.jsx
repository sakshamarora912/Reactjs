import React from 'react';
import EnquiryForm from './../EnquiryForm';

const Urologist = () => {
  return (
    <section className="p-6 bg-white">
      <div className="max-w-[70em] mx-auto">
        <h1 className="text-3xl font-semibold mb-4 text-[#5183a2]">Online Urologist Consultation</h1>
        <p className="text-lg max-w-xl mb-6">
          With the ongoing pandemic, many people are hesitant to visit hospitals due to the risk of infection. At <strong>APG</strong>, we offer online urologist consultations for individuals who are uncomfortable seeing a doctor in person. If you're experiencing pain in the ureters, urethra, adrenal glands, kidneys, or bladder, you can book an appointment with our expert urologists immediately. <strong>APG</strong> ensures the highest level of confidentiality regarding your consultations and prescriptions.
        </p>

        <button className="mt-4 mb-12 px-6 py-2 bg-[#487490] text-white rounded-lg shadow hover:bg-[#5183a2] transition-all duration-300">Book Now</button>

        <EnquiryForm/>

        <h3 className="text-xl font-semibold mt-6 text-[#5183a2]">Urologist for Female</h3>
        <p className="text-lg mb-6">Women are more prone to urinary tract infections (UTIs) than men. Many hesitate to discuss their issues, but <strong>APG</strong> provides female urologists to address these concerns. Our female urologists specialize in reproductive and urinary tract problems. You can consult with a female urologist based on your comfort and availability.</p>

        <h3 className="text-xl font-semibold mb-4 text-[#5183a2]">Urologist for Male</h3>
        <p className="text-lg mb-6">Our male urologists specialize in conditions related to the epididymis, testes, prostate, penis, and hematospermia. You can discuss your health concerns comfortably from home with our specialists.</p>

        <h3 className="text-xl font-semibold mb-4 text-[#5183a2]">When Should You Consult a Urologist?</h3>
        <p className="text-lg mb-6">Consult a urologist if you're experiencing urinary issues or serious conditions like UTIs. Our doctors are highly skilled in treating UTIs and serious conditions like cancer. Here are some signs that you need to consult a urologist:</p>
        <ul className="list-disc pl-6 text-lg mb-6 space-y-2">
          <li>Blood in the urine</li>
          <li>Burning pain in the bladder</li>
          <li>Pain in the lower abdomen or kidney area</li>
          <li>Frequent urination</li>
          <li>Urinary incontinence</li>
          <li>Severe constipation</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-[#5183a2]">Precautions to Stay Safe from Urological Problems</h3>
        <ul className="list-disc pl-6 text-lg mb-6 space-y-2">
          <li>Avoid smoking and limit alcohol consumption</li>
          <li>Exercise regularly, ideally in the morning</li>
          <li>Maintain a healthy weight and eat a balanced diet</li>
          <li>Reduce salt intake to prevent urological issues</li>
          <li>Drink 2 to 3 liters of water daily to help cleanse your kidneys and digestive system</li>
        </ul>

        <p className="text-lg mb-6">
          Feel free to discuss any bladder or urological health concerns with our experienced urology doctors. Download the <strong>APG</strong> app and book your appointment today!
        </p>
      </div>
    </section>
  );
};

export default Urologist;
