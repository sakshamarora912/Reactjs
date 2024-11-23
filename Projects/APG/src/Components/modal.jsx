import React from "react";

const Modal = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-2xl max-w-md mx-auto relative transform scale-75 w-[30em] sm:w-[25em] md:w-[30em] lg:w-[35em]">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Enquiry Now <span className="text-blue-500">24*7 Support</span>
      </h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text"id="name" placeholder="Enter your name" aria-label="Name"className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone No</label>
          <input type="number" id="phone" placeholder="Enter your phone number" aria-label="Phone Number"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
          <input type="email" id="email" placeholder="Enter your email address" aria-label="Email Address"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1"> Select City </label>
          <select id="city" name="city" aria-label="Select City" className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select City</option>
            <option value="Alipur">Alipur</option>
            <option value="Bawana">Bawana</option>
            <option value="Central Delhi">Central Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Deoli">Deoli</option>
            <option value="East Delhi">East Delhi</option>
            <option value="Karol Bagh">Karol Bagh</option>
            <option value="Najafgarh">Najafgarh</option>
            <option value="Nangloi Jat">Nangloi Jat</option>
            <option value="Narela">Narela</option>
            <option value="New Delhi">New Delhi</option>
            <option value="North Delhi">North Delhi</option>
            <option value="North East Delhi">North East Delhi</option>
            <option value="North West Delhi">North West Delhi</option>
            <option value="Pitampura">Pitampura</option>
            <option value="Rohini">Rohini</option>
            <option value="South Delhi">South Delhi</option>
            <option value="South West Delhi">South West Delhi</option>
            <option value="West Delhi">West Delhi</option>
          </select>
        </div>

        <div>
          <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1"> Select Equipment </label>
          <select id="equipment" name="equipment" aria-label="Select Equipment"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Equipment</option>
            <option value="Walker">Walker</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1"> Order Type </label>
          <select id="type" name="type" aria-label="Order Type" className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Order Type</option>
            <option value="Sale">Medical Equipment for Sale</option>
            <option value="Purchase">Medical Equipment for Purchase</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-[#487490] py-2 px-4 rounded-lg font-medium hover:bg-[#5183a2] focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
        >
          Submit Enquiry
        </button>
      </form>
    </section>
  );
};

export default Modal;
