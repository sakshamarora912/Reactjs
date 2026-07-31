import React from 'react'
import EnquiryForm from './../EnquiryForm';

const VaccinationatHome = () => {
    return (
        <section className="p-6 bg-gray-50 max-w-full sm:max-w-[70em] mx-auto shadow-lg rounded-lg mt-6">
          <div className="text-left mb-8">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mt-[5em] mb-[2em]">
              Vaccination at Home: Safe, Convenient, and Comfortable
            </h1>

            <div className="mt-4 mb-12">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-[#5183a2] text-white font-medium rounded-md hover:bg-blue-700 transition">
                Book Now
              </a>
            </div>

            <EnquiryForm/>
            
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#5183a2] mb-4">
              Why Choose Vaccination at Home?
            </h2>
            <p className="text-lg text-gray-600 mb-4 sm:w-[30em] w-full">
              No more trips to the hospital, no more fear, and no risk of infection. APG brings the comfort and safety of vaccination directly to your doorstep. With a simple online booking, you can ensure your child’s vaccinations are administered in the safety of your home.
            </p>
            <p className="text-lg text-gray-600">
              Note: A prescription is mandatory for all home vaccinations.
            </p>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#5183a2] mb-4">
              Types of Vaccines We Offer
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
              <li>Rotaviral vaccination</li>
              <li>Newborn Baby Vaccination</li>
              <li>Varicella Vaccination</li>
              <li>Pertussis vaccination</li>
              <li>Mumps vaccination</li>
              <li>Adult Vaccination</li>
              <li>BCG Vaccination</li>
              <li>Polio Vaccination</li>
              <li>Swine flu Vaccination</li>
              <li>Rubella vaccination</li>
              <li>Rabies vaccination</li>
              <li>MMR vaccination</li>
              <li>Typhoid vaccination</li>
              <li>HPV vaccination</li>
              <li>Tetanus Vaccination</li>
              <li>Hepatitis A Vaccination</li>
              <li>Hepatitis B Vaccination</li>
              <li>Measles Vaccination</li>
              <li>Yellow Fever Vaccination</li>
              <li>Pneumococcal Vaccination</li>
              <li>Chickenpox Vaccination</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#5183a2] mb-4">
              Importance of Vaccination
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
              <li>Helps your child develop immunity against common infections.</li>
              <li>Reduces the intensity of illnesses if the child gets infected.</li>
              <li>Prevents malnutrition and growth retardation caused by frequent infections.</li>
              <li>Prevents serious complications like paralysis and dehydration.</li>
              <li>Contributes to herd immunity, protecting the broader community.</li>
              <li>A cost-effective way to promote health and prevent illness.</li>
              <li>For immune-compromised individuals, it prevents short-term illness from becoming life-threatening.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#5183a2] mb-4">
              Advantages of Home Vaccination
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
              <li>Eliminates travel costs and time spent in hospitals.</li>
              <li>Convenient scheduling based on your availability, no need for leave from work.</li>
              <li>Reduces anxiety for children, who are more comfortable in their home environment.</li>
              <li>Ideal for children with serious illnesses, minimizing exposure to hospital infections.</li>
              <li>Ensures timely vaccination, reducing the risk of severe illness later on.</li>
              <li>Helps reduce the spread of vaccine-preventable diseases to others.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#5183a2] mb-4">
              Important Vaccines Explained
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-medium text-gray-700 mb-2">Hepatitis B Vaccine</h3>
                <p className="text-lg text-gray-600">
                  The Hepatitis B vaccine protects against the Hepatitis B virus, which can cause serious liver disease.
                </p>
                <a
                  href="/learn-more"
                  className="text-[#5183a2] hover:underline"
                >
                  Learn More
                </a>
              </div>
    
              <div>
                <h3 className="text-2xl font-medium text-gray-700 mb-2">Tetanus Vaccine</h3>
                <p className="text-lg text-gray-600">
                  The Tetanus vaccine prevents tetanus infection, which is commonly caused by rusted iron or contaminated soil.
                </p>
                <a
                  href="/learn-more"
                  className="text-[#5183a2] hover:underline"
                >
                  Learn More
                </a>
              </div>
    
              <div>
                <h3 className="text-2xl font-medium text-gray-700 mb-2">Pneumococcal Vaccine</h3>
                <p className="text-lg text-gray-600">
                  The Pneumococcal vaccine provides protection against pneumonia and meningitis caused by pneumococcal bacteria.
                </p>
                <a
                  href="/learn-more"
                  className="text-[#5183a2] hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
    );
};

export default VaccinationatHome;
