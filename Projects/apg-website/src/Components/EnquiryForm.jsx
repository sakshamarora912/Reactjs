import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({ name: '', phoneNumber: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', formData);
    alert('Enquiry Submitted!');
    setFormData({ name: '', phoneNumber: '', email: '' });
  };

  return (
    <section className="sm:p-6 bg-white max-w-[72em] mx-auto mb-12 [border:2px_solid_#5183a2] rounded-md">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-[#5183a2]"> Fill out the form to enquire now</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex">
          <div className='w-[18em]'>
            <label htmlFor="name" className="block text-base sm:text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name"
              className="w-[15em] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5183a2] focus:outline-none text-white"
            />
          </div>
          <div className='w-[18em]'>
            <label htmlFor="phoneNumber" className="block text-base sm:text-lg font-semibold mb-2">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="Enter your phone number"
              className="w-[15em] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5183a2] focus:outline-none text-white"
            />
          </div>

          <div className='w-[18em]'>
            <label htmlFor="email" className="block text-base sm:text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email"
              className="w-[15em] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5183a2] focus:outline-none text-white"
            />
          </div>

          <button type="submit" className= "mt-[2.2em] w-[6em] h-[3em] p-3 bg-[#5183a2] text-white font-semibold rounded-md hover:bg-[#436a86] transition duration-200">Send</button>
        </div>
      </form>
    </section>
  );
};

export default EnquiryForm;
