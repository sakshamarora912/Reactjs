import React from "react";
import EnquiryForm from './../EnquiryForm';

const Nephrologist = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="max-w-[70em] mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Online Nephrologist Consultation</h1>
        <p className="text-base md:text-lg mb-6">
          Kidneys are essential organs in our body that play a critical role in filtering waste and maintaining our overall health. With the rise in kidney-related diseases, seeking the help of a nephrologist has never been more important. <strong>APG</strong> offers online nephrologist consultations across India, giving you access to the top nephrologists from the comfort of your home. Download our app today and book an appointment to get the best treatment for your kidney health.
        </p>

        <button className="mt-4 mb-12 px-6 py-2 bg-[#5183a2] text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300">Book Now</button>

        <EnquiryForm/>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-6 text-[#5183a2]">What is Nephrology?</h2>
        <p className="text-base md:text-lg mb-6">Nephrology is a medical specialty focused on the study and treatment of kidney diseases, which includes maintaining kidney health, treating kidney-related disorders, and managing kidney failure through dialysis or transplantation. It covers a wide range of conditions, from kidney infections to kidney transplants.</p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#5183a2]">Conditions Treated by Nephrologists:</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>Urinary irregularities (excess protein, blood, sugar, and crystals)</li>
          <li>Kidney stones</li>
          <li>Kidney infections</li>
          <li>Kidney cancer</li>
          <li>Chronic kidney disease (CKD)</li>
          <li>Renal failure</li>
          <li>Dialysis (hemodialysis and peritoneal dialysis)</li>
          <li>Polycystic kidney disease</li>
          <li>Kidney injury</li>
          <li>Urinary tract infections (UTIs)</li>
          <li>Kidney pain and more</li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#5183a2]">Who is a Nephrologist?</h3>
        <p className="text-base md:text-lg mb-6">
          A nephrologist is a specialized doctor who treats kidney diseases and ensures proper kidney function. These experts provide up-to-date care and effective treatment for patients with kidney issues, offering solutions ranging from medication to dialysis.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#5183a2]">Common Kidney Diseases Treated by Nephrologists:</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>
            <strong>Kidney Stones:</strong> Hard, crystalline deposits that form in the kidneys and cause intense pain and urinary blockages. Symptoms include severe back or side pain, blood in urine, and fever.
          </li>
          <li>
            <strong>Kidney Failure:</strong> When kidneys lose their ability to filter waste and toxins from the body. It can be acute or chronic and may require dialysis or transplantation.
          </li>
          <li>
            <strong>Urinary Tract Infections (UTIs):</strong> Infections that affect any part of the urinary system, including kidneys, ureters, and bladder.
          </li>
          <li>
            <strong>Chronic Kidney Disease (CKD):</strong> A long-term condition where kidney function gradually declines.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#5183a2]">Why Choose APG for Online Nephrologist Consultations?</h2>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>Access the best nephrologists in India through online consultations.</li>
          <li>Convenient, quick, and secure doctor appointments via the APG app.</li>
          <li>Maintain privacy and confidentiality with every consultation.</li>
          <li>Expert care from verified, experienced nephrologists.</li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#5183a2]">Pediatric Nephrologist Care:</h3>
        <p className="text-base md:text-lg mb-6">
          A pediatric nephrologist is a doctor who specializes in treating kidney-related conditions in children. From treating congenital kidney issues to managing conditions like nephrotic syndrome and kidney transplantation, they ensure optimal care for children with kidney disorders.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#5183a2]">When Should You Consult a Nephrologist?</h3>
        <p className="text-base md:text-lg mb-6">If you or your child experiences any of the following symptoms, it may be time to consult a nephrologist:</p>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>Dark or cloudy urine</li>
          <li>Frequent urination</li>
          <li>Pain in the lower back or abdomen</li>
          <li>Swelling of the face, ankles, or feet</li>
          <li>High blood pressure or diabetes</li>
        </ul>
      </div>
    </section>
  );
};

export default Nephrologist;
