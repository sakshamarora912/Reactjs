import React from "react";
import EnquiryForm from './../EnquiryForm';

const Diabetologist = () => {
  return (
    <section className="p-6 bg-white">
      <div className="max-w-[72em] mx-auto">
        <h1 className="text-[#5183a2] text-2xl md:text-3xl font-semibold mb-4">Online Diabetologist Consultation</h1>
        <p className="text-base md:text-lg mt-6 md:w-2/3 lg:w-1/2">Diabetes is a growing concern globally, with approximately 9.3% of the world’s population affected. India has the second-largest number of diabetic patients, after China. A diabetologist or endocrinologist specializes in diagnosing and treating diabetes. If you're looking for the best diabetes doctor in India, <strong>APG</strong> offers online consultations with top diabetologists across the country.</p>
        <button className="mt-4 mb-12 px-6 py-2 bg-[#5183a2] text-white text-sm md:text-base font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-300">Book Now</button>
        <EnquiryForm/>
        <h2 className="text-[#5183a2] text-xl md:text-2xl font-semibold mt-6 mb-6">Book Now for Online Diabetologist Consultation</h2>
        <p className="text-base md:text-lg mb-6">Diabetes is a condition that leads to excess glucose in the blood. Type 1 diabetes, in particular, occurs when your immune system attacks and destroys the insulin-producing cells in the pancreas. Researchers believe that type 1 diabetes is triggered by a combination of genetic factors and environmental factors, such as viruses.</p>
        <h3 className="text-[#5183a2] text-lg md:text-xl font-semibold mb-4">What Are the Tests to Diagnose Diabetes?</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>A1c Test</li>
          <li>Fasting Blood Sugar Test (FBS)</li>
          <li>Glucose Tolerance Test</li>
          <li>Random Blood Sugar Test</li>
          <li>Glucose Screening Test</li>
        </ul>

        <h3 className="text-[#5183a2] text-lg md:text-xl font-semibold mb-4">What Is Diabetes?</h3>
        <p className="text-base md:text-lg mb-6">Diabetes is a metabolic disease that causes high blood sugar levels. When we consume food, our digestive system converts it into glucose, which serves as fuel for the body's cells. Insulin, a hormone produced by the pancreas, helps glucose enter cells to produce energy. If the pancreas fails to produce insulin properly, glucose accumulates in the blood, leading to diabetes.</p>
        <h3 className="text-lg md:text-xl font-semibold mb-4">Types of Diabetes:</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li><strong>Type 1 Diabetes:</strong> A rare condition, typically seen in children, where the immune system attacks the insulin-producing cells in the pancreas, leading to high blood sugar levels.</li>
          <li><strong>Type 2 Diabetes:</strong> In this form of diabetes, either the pancreas produces insufficient insulin, or the cells develop resistance to insulin.</li>
          <li><strong>Prediabetes:</strong> A condition where blood sugar levels are higher than normal but not yet high enough to be classified as diabetes.</li>
          <li><strong>Gestational Diabetes:</strong> A type of diabetes that occurs during pregnancy.</li>
        </ul>

        <h3 className="text-[#5183a2] text-lg md:text-xl font-semibold mb-4">Symptoms of Type 1 Diabetes:</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>Extreme hunger</li>
          <li>Weight loss</li>
          <li>Increased thirst</li>
          <li>Feeling tired</li>
          <li>Vision loss</li>
          <li>Mood changes (e.g., extreme anger)</li>
        </ul>

        <h3 className="text-[#5183a2] text-lg md:text-xl font-semibold mb-4">Symptoms of Type 2 Diabetes:</h3>
        <ul className="list-disc pl-6 text-base md:text-lg mb-6">
          <li>Extreme hunger</li>
          <li>Weight loss</li>
          <li>Increased thirst</li>
          <li>Feeling tired</li>
          <li>Drowsiness</li>
          <li>Vision loss</li>
          <li>Mood changes (e.g., extreme anger)</li>
        </ul>

        <h3 className="text-[#5183a2] text-lg md:text-xl font-semibold mb-4">What Is the Process of a Diabetes Test?</h3>
        <p className="text-base md:text-lg mb-6">Diabetes can be diagnosed through blood tests and urine tests. The blood sample is usually taken after fasting for 12 hours and again two hours after eating. These tests measure the amount of glucose in the blood.</p>
        <h3 className="text-[#5183a2] text-lg md:text-xl font-semibold mb-4">What Is the A1c Test?</h3>
        <p className="text-base md:text-lg mb-6">The A1c test measures the percentage of glycated hemoglobin in the blood, indicating how well blood sugar levels have been controlled over the past two to three months.</p>
      </div>
    </section>
  );
};

export default Diabetologist;
