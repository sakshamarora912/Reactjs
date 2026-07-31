import React, { useState } from "react";
import Slider from 'react-slick';
import '../App.css'

const Diagnostics = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleDropdown = (index) => setActiveIndex(activeIndex === index ? null : index)

  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick} style={{display: "block",zIndex: 10,left: "10px"}}> &#8249;</button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick} style={{ display: "block", zIndex: 10, right: "10px",}}>&#8250;</button>
  );
  
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1080, settings: { slidesToShow: 2 } },
    ],
  };

  const test = [
    {title:'Complete Blood Count',newPrice:'385',oldprice:"299",text_1:"Report Time: Same Day",text_2:"Home Collection Available"},
    {title:'Complete Blood Count',newPrice:'385',oldprice:"299",text_1:"Report Time: Same Day",text_2:"Home Collection Available"},
    {title:'Complete Blood Count',newPrice:'385',oldprice:"299",text_1:"Report Time: Same Day",text_2:"Home Collection Available"},
    {title:'Complete Blood Count',newPrice:'385',oldprice:"299",text_1:"Report Time: Same Day",text_2:"Home Collection Available"},
    {title:'Complete Blood Count',newPrice:'385',oldprice:"299",text_1:"Report Time: Same Day",text_2:"Home Collection Available"},
    {title:'Complete Blood Count',newPrice:'385',oldprice:"299",text_1:"Report Time: Same Day",text_2:"Home Collection Available"},
  ]

  const packages = [
    {
      name: "Diabetic Package",
      details: [
        "Complete Blood Picture (CBP), EDTA Whole Blood",
        "Complete Urine Examination (CUE), Urine",
        "Erythrocyte Sedimentation Rate (ESR), Sodium Citrate Whole Blood",
        "Liver Function Test (LFT), Serum",
        "Protein / Creatinine Ratio, Spot Urine",
        "Thyroid Stimulating Hormone (TSH) Ultrasensitive, Serum",
        "Lipid Profile, Serum",
        "Glucose Fasting (FBS), Sodium Fluoride Plasma",
        "Glucose Post Prandial (PPBS), Sodium Fluoride Plasma",
        "Glycosylated Hemoglobin (HbA1C), EDTA Whole Blood",
        "Creatinine, Serum",
        "Microalbumin, Spot Urine",
        "Blood Urea Nitrogen (BUN), Serum",
        "Collection charges",
      ],
    },
    {
      name: "Heart Health Package",
      details: [
        "Lipid Profile, Serum",
        "ECG Test",
        "Stress Test",
        "Cardiac Enzymes Test",
        "Blood Pressure Monitoring",
        "Consultation with Cardiologist",
      ],
    },
  ];

  return (
    <section className="bg-white p-6 space-y-8">
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-4 text-[#5183a2]">Blood Test at Home</h1>
        <p className="text-lg mb-4 text-gray-800">APG is a trusted, all-in-one digital healthcare platform offering a wide range of blood tests at home. We've partnered with top NABL-certified laboratories to provide reliable, at-home diagnostic services.</p>
        <p className="text-lg mb-4 text-gray-800"> For older adults, bedridden patients, and those recovering from surgery, visiting diagnostic centers can be challenging. APG makes it easier by offering affordable health checkup packages, now available in your area.</p>
        <p className="text-lg mb-4 text-gray-800"> Visit APG today to book your blood test at home! We provide expert phlebotomists who follow strict safety protocols when collecting your blood samples.</p>
      </div>

      <div className="text-left">
        <h1 className="text-2xl font-semibold mb-4 text-[#5183a2]">Popular Blood Tests</h1>
        <p className="text-lg mb-6 text-gray-800"> With APG, book a blood or urine lab test at home & get the fastest blood sample collection from NABL-certified labs near your location.</p>

        <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[15em !important]">
          <Slider className="w-[74em] custom-slick-slider" {...settings}>
            {test.map((testName,index)=>(
              <div key={index} className="pt-4 pb-4 border rounded-lg shadow-md text-center bg-gray-50 slick-slide-item">
               <div  className="custom-width">
                  <h1 className="text-xl font-semibold mb-2 text-black">{testName.title}</h1>
                  <p className="text-lg text-gray-800">₹{testName.newPrice}</p>
                  <p className="text-lg text-gray-800 line-through">₹{testName.oldprice}</p>
                  <p className="font-semibold mt-2 text-gray-800">{testName.text_1}</p>
                  <p className="mt-2 text-gray-800">{testName.text_2}</p>
               </div>
              </div>
            ))}
          </Slider>  
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-semibold text-center mb-6 text-[#5183a2]">Health Packages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Full Body Checkup","Fever Health Package","Female Health Package","Elder Health Package","Young Health Package",
          ].map((packageName, index) => (
            <div key={index} className="text-center p-4 border rounded-lg shadow-md bg-gray-50" >
              <img src="" alt={packageName} className="w-full h-32 object-cover mb-4 transform scale-150"/>
              <h1 className="text-xl font-semibold text-black">{packageName}</h1>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white p-6 space-y-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-[#5183a2]"> Our Diagnostic Services</h1>
        <p className="text-center mb-6 text-lg text-gray-800">Get best-in-class diagnostic services at home exactly when you need them!</p>
        <div className="space-y-4">
          {packages.map((pkg, index) => (
            <div key={index} className="border rounded-lg shadow-md p-4 bg-gray-50">
              <div className="flex justify-between items-center cursor-pointer"onClick={() => toggleDropdown(index)}>
                <h1 className="text-xl font-semibold text-black">{pkg.name}</h1>
                <button className="text-2xl font-bold text-blue-500"aria-label={`Toggle ${pkg.name}`}>
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-4">
                  <ul className="list-disc pl-6 space-y-2 text-gray-800">
                    {pkg.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <button className="mt-4 bg-[#5183a2] text-white py-2 px-4 rounded-lg">Enquire Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Diagnostics;
