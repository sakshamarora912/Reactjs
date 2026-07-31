import React from "react";

const Physio = () => {
  return (
    <section className="bg-gray-50 space-y-8 p-4 md:p-8">
      <section className="text-left space-y-4 md:w-3/4 lg:w-2/3 wx-[75em]">
        <h1 className="text-2xl md:text-3xl font-bold text-[#5183a2]">Physiotherapy at Home</h1>
        <h2 className="text-md md:text-lg font-semibold text-[#487490]">Get Fast and Speedy Relief and Recovery with the Help of Physiotherapy</h2>
        <p className="text-gray-500 leading-relaxed">Looking for physiotherapy at home? APG is associated with the best physiotherapists for all types of physiotherapy needs. We have a network of expert physiotherapists who provide services for various conditions including geriatric physiotherapy, children’s physiotherapy, joint and posture issues, as well as neurological disorders. Our healthcare professionals are dedicated to understanding your specific needs and helping you maintain a healthy lifestyle.</p>
        <p className="text-gray-500 leading-relaxed">For more critical cases, APG also offers nurse-at-home and other homecare services. We provide a range of medical equipment for rent, including wheelchairs and hospital beds, all available through APG's online portal.</p>
        <div>
          <a href="./" className="px-4 py-2 bg-[#5183a2] text-white text-sm md:text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Book Now
          </a>
        </div>
      </section>

      {[
        {title: "What is Physiotherapy?",content: (
            <>
              <p className="text-[#487490]">Physiotherapy is a type of physical training given to people as a form of physical rehabilitation or treatment for those who experience:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Loss of function</li>
                <li>Loss of strength</li>
                <li>Injury to a body part</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">Physiotherapy is provided by a physiotherapist who aims to restore balance, function, mobility, and strength to the injured or affected body part. It helps improve autonomy and quality of life.</p>
            </>
          ),
        },
        {title: "Benefits of Physiotherapy",content: (
            <>
              <p className="text-[#487490]">
                Physiotherapy offers numerous benefits for post-surgery patients and those with chronic conditions or musculoskeletal issues, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Pain relief through techniques like massage, heat, and ice therapy</li>
                <li>Improved joint mobility and range of motion</li>
                <li>Muscle strengthening to restore function and prevent muscle wasting</li>
                <li>Enhanced balance and stability, especially in older adults</li>
              </ul>
            </>
          ),
        },
        {title: "Types of Physiotherapy Available",content: (
            <>
              <p className="text-[#487490]">Physiotherapy is applicable in various rehabilitation settings, including:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li><b>Orthopaedic physiotherapy:</b> For ligament tears, joint injuries, or arthritis.</li>
                <li><b>Cardiovascular and lung physiotherapy:</b> For heart and lung conditions like COPD and post-surgery.</li>
                <li><b>Neurophysiotherapy:</b> For rehabilitation following nerve injuries or stroke.</li>
                <li><b>Geriatric physiotherapy:</b> For mobility issues in older adults.</li>
                <li><b>Women’s physiotherapy:</b> Focuses on pregnancy-related conditions and pelvic floor disorders.</li>
                <li><b>Sports physiotherapy:</b> For sports injury rehabilitation.</li>
              </ul>
            </>
          ),
        },
        {title: "Online Physiotherapy Consultation",content: (
            <p className="text-gray-700 leading-relaxed">We offer online physiotherapy consultations for patients unable to visit in person. With online consultations, you can receive the same Physiotherapy at Home service experience with flexible timings and affordable prices.</p>
          ),
        },
        {title: "Why Choose APG for Physiotherapy at Home",content: (
            <>
              <p className="text-gray-700 leading-relaxed">APG is a leading medical service provider, offering high-quality physiotherapy services at home. We partner with experienced physiotherapists across major cities to deliver affordable care.</p>
              <p className="text-gray-700 leading-relaxed">Our online physiotherapy services offer a convenient, one-on-one approach for pain relief and functional recovery from the comfort of your home.</p>
            </>
          ),
        },
      ].map(({ title, content }, idx) => (
        <section key={idx} className="space-y-4 md:w-3/4 lg:w-[75em] mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-[#5183a2]">{title}</h1>
          {content}
        </section>
      ))}
    </section>
  );
};

export default Physio;
