import React from "react";
import EnquiryForm from './../EnquiryForm';
import bg_image_03 from '../../assets/apg-pediatrician.jpg'


const PediatricService = ({ title, description }) => (
  <div className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow">
    <h1 className="text-lg font-semibold text-[#5183a2] mb-2">{title}</h1>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Pediatrician = () => {
  return (
    <section className="p-6 bg-white text-gray-800 space-y-10">
      <div class="p-6 h-[22em] bg-right  bg-no-repeat bg-contain" style={{ backgroundImage: `url(${bg_image_03})`,backgroundPosition:'45em -3em' }}>
        <h1 className="text-3xl font-bold text-left text-[#5183a2]">
          Online Pediatrician Consultation
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-md">
          If you're seeking online pediatrician consultations, APG is here to connect you with the best pediatricians
          for both online and offline consultations. Newborns often face various health challenges after birth, and a
          skilled pediatrician ensures comprehensive care for their physical, emotional, and mental well-being. It's
          essential to monitor a child's nutrition, growth, behavior, and mental health to support their overall
          development.
        </p>
        <button className="mt-4 px-6 py-2 bg-[#487490] text-white rounded-lg shadow hover:bg-[#5183a2]">
          Book Now
        </button>

        {/* <EnquiryForm/> */}
        
      </div>
      <EnquiryForm/>

      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-[#5183a2]">Best Pediatricians</h1>
        <p className="text-gray-700">
          At APG, we provide the best pediatricians across India to ensure the good health and holistic development of
          every child. Our dedicated team of pediatricians, neonatologists, and pediatric critical care experts strives to
          deliver exceptional care and outstanding results at all times.
        </p>
        <p className="text-gray-700">
          Our experts take pride in identifying the root cause of any health concern before initiating treatment. They
          work collaboratively with professionals from other departments, thoroughly reviewing each patient’s condition to
          create personalized treatment plans tailored to the individual needs of the patient.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-[#5183a2] mb-4">Treatment</h1>
        <p className="text-gray-700 mb-4">
          We are committed to providing the highest quality care with the expertise of our top pediatric specialists. Our
          comprehensive pediatric services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Pediatric Emergency and Intensive Care</li>
          <li>Well-Baby Clinic</li>
          <li>Neonatal Intensive Care</li>
          <li>Pediatric Infectious Disease Management</li>
          <li>Pediatric Neurology and Child Development Clinic</li>
          <li>Pediatric Immunology and Rheumatology Services</li>
          <li>Pediatric Hepatology and Hematology</li>
          <li>Pediatric Cardiac Care</li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-[#5183a2] mb-4">Responsibilities of a Pediatrician</h1>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Assess and monitor a child's current and past health conditions.</li>
          <li>Build strong communication with parents, clearly explaining the child's health status.</li>
          <li>Support the holistic development of a child.</li>
          <li>Provide primary care and diagnose various illnesses.</li>
          <li>Administer vaccinations and offer nutrition guidance.</li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-[#5183a2] mb-4">Common Problems in Children</h1>
        <p className="text-gray-700 mb-4">
          Children often fall ill due to various factors such as poor eating habits, irregular sleep, and other lifestyle
          choices. APG offers access to top pediatricians online to help address common health concerns in children.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Stomach infections</li>
          <li>Genetic conditions</li>
          <li>Cancers</li>
          <li>Long-term injuries</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PediatricService
          title="Fever"
          description="Children are more susceptible to fever during climate changes. Our pediatricians provide guidance to maintain your child's health."
        />
        <PediatricService
          title="Cough and Cold"
          description="Cough and cold are common in children. APG offers access to top pediatricians to address these concerns."
        />
        <PediatricService
          title="Vaccination"
          description="Timely vaccination is crucial for your child. Our pediatricians ensure vaccinations are administered on schedule."
        />
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-[#5183a2] mb-4">What are the specializations of a Pediatrician?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 font-medium mb-2">Primary Specializations:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pediatric Endocrinologist</li>
              <li>Adolescent Health Specialist</li>
              <li>Pediatric Allergist/Immunologist</li>
              <li>Pediatric Cardiologist</li>
              <li>Pediatric Emergency Physician</li>
              <li>Neonatologist</li>
            </ul>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Subspecialties:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pediatric Nephrologist</li>
              <li>Pediatric Pulmonologist</li>
              <li>Pediatric Rheumatologist</li>
              <li>Pediatric Gastroenterologist</li>
              <li>Pediatric Hematologist/Oncologist</li>
              <li>Developmental-Behavioral Pediatrician</li>
              <li>Pediatric Infectious Diseases Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pediatrician;
