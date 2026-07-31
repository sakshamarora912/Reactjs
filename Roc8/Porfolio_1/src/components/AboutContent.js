import React from 'react';

const AboutContent = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-4 md:px-8 text-white">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Qualifications & Experience</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300">A summary of my educational background, professional experience, and skills.</p>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-700 p-4 md:p-6 lg:p-8 rounded-lg shadow-xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-blue-400">MCA</h3>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg">Lovely Professional University, Phagwara, Punjab</p>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg">08/2021 – 05/2023</p>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg">CGPA: 8.48</p>
            </div>
            <div className="bg-gray-700 p-4 md:p-6 lg:p-8 rounded-lg shadow-xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-blue-400">BBA-CAM</h3>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg">Ideal Institute of Management and Technology, Karkardooma, Delhi</p>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg">04/2018 - 06/2021</p>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg">CGPA: 8.95</p>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">Work Experience</h2>
          <div className="bg-gray-700 p-4 md:p-6 lg:p-8 rounded-lg shadow-xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-blue-400">Software Engineer</h3>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg">GAVS Technologies</p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">06/2023 - 06/2024</p>
            <p className="mt-4 text-gray-300 text-sm md:text-base lg:text-lg">
              I have had the privilege of contributing to a variety of projects, each offering valuable opportunities to hone my coding skills and collaborate with seasoned professionals. Throughout these experiences, I've consistently demonstrated adaptability and a steadfast commitment to learning, effectively contributing to every stage of the software development life cycle.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">JavaScript</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">Tailwind</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">CSS</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">ReactJs</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">Bootstrap</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">SQL</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">Mongogb</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">Angular</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">C++</div>
            <div className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xl text-sm md:text-base lg:text-lg">Java</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
