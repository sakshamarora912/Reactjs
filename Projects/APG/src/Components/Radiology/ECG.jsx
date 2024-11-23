import React from 'react';
import EnquiryForm from './../EnquiryForm';

const ECGAtHome = () => {
  return (
    <section className="p-6 bg-white max-w-[75em] mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-2xl font-semibold mb-4 mt-20 text-[#5183a2]">ECG Test at Home</h1>
      <p className="text-lg sm:text-xl md:text-base mb-6 w-[35em]">
        Are you suffering from any heart condition and need an ECG scan? Medintu offers accurate home-based ECG scans using a portable machine that gives reliable results. Whether you already have heart problems or feel symptoms, it's important to keep in touch with your heart health. Medintu is committed to providing high-end technology at affordable prices so that you and your family can access healthcare that doesn't break the bank. Book your appointment today and get an online consultation with our partner cardiologists for the best interpretation of your ECG test.
      </p>
      <div className="text-left mb-6">
        <a href="https://Medintu.com/book-now" className="px-6 py-3 bg-[#5183a2] text-white rounded-md hover:bg-[#5183a2]">Book Now</a>
      </div>

      <EnquiryForm/>

      <h2 className="text-2xl sm:text-xl md:text-3xl font-semibold mb-4 text-[#5183a2]">What is ECG?</h2>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        ECG or electrocardiography is a test that checks the heart’s function, regularity, rate, and rhythm. It helps cardiologists diagnose various heart conditions, monitor, and treat them. The ECG machine has probes connected to the main machine via wires, recording the electrical waves of the heart and printing them out on a sheet of paper. The ECG strip is used to read the heart’s electrical signals and is kept for future reference.
      </p>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">What Conditions can an ECG Help Diagnose?</h3>
      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Wolff Parkinson White Syndrome</li>
        <li>Brugada Syndrome</li>
        <li>Heart Attack</li>
        <li>Heart Blocks</li>
        <li>Sinus Bradycardia</li>
        <li>Atrial Fibrillation</li>
        <li>Atrial Flutter</li>
        <li>Angina</li>
        <li>Hyperkalemia, Hypokalemia, and Other Metabolic Abnormalities</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">When to Take the ECG Test?</h3>
      <p className="text-lg sm:text-base md:text-base mb-6">
        You should consider an ECG test if you notice any of the following signs or symptoms:
      </p>
      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Palpitations or rapid heartbeats</li>
        <li>Excessive sweating</li>
        <li>Nausea</li>
        <li>Fainting sensation</li>
        <li>Chest pain</li>
        <li>Pain in the jaw, arm, or back</li>
        <li>Burning sensation in the chest</li>
        <li>Stabbing pain in the chest</li>
        <li>Loss of consciousness</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">What Are the Benefits of ECG Test at Home?</h3>
      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Tested in the comfort of your home</li>
        <li>Saves money and time compared to hospital visits</li>
        <li>No exposure to hospital environments, reducing the risk of hospital-acquired infections</li>
        <li>Individualized care and attention from trained professionals</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">How to Prepare for an ECG Test at Home?</h3>
      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Wear loose, comfortable clothes</li>
        <li>Avoid drinking caffeine before the ECG examination</li>
        <li>Do not exercise before the ECG test</li>
        <li>Remain still during the ECG test</li>
        <li>Remove all metal ornaments and jewelry, including electric watches</li>
        <li>Avoid applying heavy creams or oils on your chest</li>
      </ul>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5183a2]">Reasons When the Doctor Might Recommend an ECG Test</h3>
      <p className="text-lg sm:text-xl md:text-base mb-6">
        A doctor or cardiologist may recommend an ECG test to monitor abnormalities caused by variations in heart rate and irregularities. Some conditions that may require an ECG include:
      </p>
      <ul className="list-disc pl-6 text-base sm:text-base mb-6">
        <li>Tachycardia</li>
        <li>Heart Attack</li>
        <li>Bradycardia</li>
        <li>Atrial Fibrillation</li>
        <li>Ventricular Fibrillation</li>
      </ul>
    </section>
  );
};

export default ECGAtHome;
