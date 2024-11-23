import React, { useState } from 'react';
import EnquiryForm from './../EnquiryForm';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const style = "bg-transparent h-[1em] w-[1em] scale-[2.5] pb-[1.5em] focus:outline-none focus:none hover:none"

  return (
    <div className="mb-4">
     <div className=' hover:bg-[#5183a2] focus:outline-none  rounded-lg  focus:ring-[#345569] w-[25em]'>
      <button  className=" flex justify-between w-[25em] text-left px-4 py-2 bg-[#73b1d8] text-white rounded-lg  hover:bg-[#5183a2] focus:outline-none  focus:ring-[#5183a2]" 
        aria-expanded={isOpen}onClick={() => setIsOpen((prev) => !prev)}>
        <span> {title}</span>
        {isOpen && <span  className={style}> - </span>}
         {!isOpen && <span  className={style}> + </span>}
      </button>
     </div>
      {isOpen && (
        <div className="mt-2 bg-gray-100 p-4 rounded-lg w-[25em]">
          <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

const Orthopedic = () => {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">What is Orthopaedics?</h1>
        <p className="text-gray-700 mb-4"> Orthopaedics is a medical specialty focused on the diagnosis and treatment of injuriesand diseases of the musculoskeletal system. This includes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Bones</li>
          <li>Joints</li>
          <li>Muscles</li>
          <li>Ligaments and tendons</li>
          <li>Nerves</li>
        </ul>
        <p className="text-gray-700"> People of all age groups can consult an orthopaedic doctor for injuries or chronic conditions such as arthritis and bursitis.</p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">What do Orthopaedists Treat?</h1>
        <p className="text-gray-700 mb-4">While some orthopaedic problems are treatable and others may not be fully curable, orthopaedic doctors aim to reduce pain and improve a patient’s overall health with appropriate medical attention. </p>
        <p className="text-gray-700"> Treatment options vary depending on the type and seriousness of the condition. They canrange from the <strong>RICE Method</strong> (rest, ice, compression, elevation) to majorsurgery.</p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Online Orthopedic Consultation</h1>
        <p className="text-gray-700 mb-4">Our daily workload or any accidental injury can lead to joint or bone-related issues. In such cases, it's important to consult a skilled orthopedic specialist to find relief. APG,a digital healthcare platform, can connect you with the best orthopedic doctors in Hyderabad. Through our APG Consultation App, you can easily find top physicians at leading hospitals. Our orthopedic doctors are highly experienced and will provide the appropriate treatment for your condition. So, whenever you need to consult a doctor, simply visit the APG Consultation App, book an appointment, and leave your worries behind.</p>
        <button className="px-6 py-2 text-[#487490] rounded-lg shadow-md hover:bg-[#5183a2] focus:outline-none focus:ring-2 focus:ring-blue-400 mb-12">Book Now</button>
        <EnquiryForm/>
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Conditions Treated by an Orthopaedist</h1>
            <div>
                <Dropdown title="Bone Problems" items={["Bone-associated deformities, tumors, infections","Various fractures","Nonunions (fractures that fail to heal)","Spinal deformities"]}/>
                <Dropdown title="Knee Problems" items={["Cartilage and meniscus injuries","Kneecap dislocation (patella)","Ligament sprains or tears","Foreign bodies","Osgood-Schlatter disease","Pain","Tendinitis","Fractures","Tendon tears",]}/>
                <Dropdown title="Spine-Related Problems" items={["Herniated (slipped) disk", "Spinal infections", "Spinal injuries","Scoliosis", "Spinal stenosis","Spinal tumors","Fractures of the spine","Spinal cord injuries","Arthritis",]}/>
                <Dropdown title="Joint Disorders" items={["Arthritis", "Bursitis", "Dislocations", "Joint pain, swelling, or inflammation", "Ligament tears", ]} />
                <Dropdown title="Foot-Related Problems" items={["Bunions","Plantar Fasciitis","Foot and ankle abnormalities","Fractures","Hammertoe deformity","Heel pain and spurs","Ankle and foot joint pain and arthritis","Ankle and foot sprains","Tarsal tunnel syndrome","Sesamoiditis","Ankle and foot tendon or ligament injuries",]}/>
                <Dropdown title="Wrist-Related Problems"items={["Fractures","Joint pain","Arthritis","Tendon or ligament injury","Carpal tunnel syndrome","Ganglion cyst","Tendinitis","Tendon tears","Infections",]}/>
            </div>
      </div>
    </section>
  );
};

export default Orthopedic;
