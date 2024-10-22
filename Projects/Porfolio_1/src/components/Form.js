import React from 'react';

const Form = () => {
  return (
    <form className="mb-16 flex flex-col p-6 md:p-8 lg:p-10 mx-auto max-w-md md:max-w-lg lg:max-w-xl bg-gray-800 rounded-lg shadow-lg">
      <label htmlFor="name" className="text-white text-lg mb-2 font-medium">Your Name</label>
      <input
        id="name"
        type="text"
        className="mb-4 p-3 text-base md:text-lg bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
      />
      
      <label htmlFor="email" className="text-white text-lg mb-2 font-medium">Email</label>
      <input
        id="email"
        type="email"
        className="mb-4 p-3 text-base md:text-lg bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
      />
      
      <label htmlFor="subject" className="text-white text-lg mb-2 font-medium">Subject</label>
      <input
        id="subject"
        type="text"
        className="mb-4 p-3 text-base md:text-lg bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter the subject"
      />
      
      <label htmlFor="message" className="text-white text-lg mb-2 font-medium">Message</label>
      <textarea
        id="message"
        rows="6"
        className="mb-4 p-3 text-base md:text-lg bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message"
      />
      
      <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
}

export default Form;
