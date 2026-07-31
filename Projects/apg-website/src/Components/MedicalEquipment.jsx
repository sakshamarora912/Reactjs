import React, { useState } from "react";
import Modal from "./Modal";

const MedicalEquipment = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section className="bg-gray-50 p-6 md:p-10 space-y-10 text-gray-700">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-[#5183a2]">Medical Equipment For Rent or Sale</h1>
        <p>Medical equipment is fundamental to modern healthcare delivery, enabling accurate diagnosis, effective treatment, continuous monitoring, and enhanced patient care. Medical equipment for home use, like hospital beds and oxygen concentrators, can take up significant space in a home environment. Renting allows patients to access necessary equipment when needed without having to worry about storing it once it’s no longer necessary.</p>
        <p>APG is a medical equipment supplier that provides medical equipment on rent near you. Renting medical equipment from APG offers convenience and peace of mind, helping patients focus on their recovery in less time. APG provides flexibility in terms of duration, allowing patients to rent durable medical equipment for as long as it’s needed, whether for a few days, weeks, or months. This is ideal for recovery periods after surgery, during rehabilitation, or while managing chronic conditions. Renting medical equipment is cost-effective as it avoids large upfront payments.</p>
        <p>APG offers a wide range of equipment as needed, reducing upfront costs and maintenance responsibilities. To rent equipment from APG, please call us at [your contact information].</p>
      </section>

      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-[#5183a2]">Medical Equipment List</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4 text-center">
            <img src="" alt="Air Mattress transform scale-150" className="w-full h-48 object-cover rounded-md" />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">Air Mattress</h2>
              <p className="text-lg text-gray-600">Starting from Rs.1000</p>
              <button onClick={handleModalToggle} className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">Rent/Sale</button>
            </div>
            <p className="text-gray-500">
              Reduces pressure on the body to prevent bedsores and improve comfort for patients who are bedridden.
            </p>
          </div>
        </section>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-full sm:w-auto max-w-lg">
            <button onClick={handleModalToggle} className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded-full focus:outline-none">✕</button>
            <Modal />
          </div>
        </div>
      )}
    </section>
  );
};

export default MedicalEquipment;
