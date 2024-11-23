import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Home'; 
import DoctorConsultation from './Components/DoctorConsulation';
import Diagnostics from './Components/Diagnostics';
import HomeCare from './Components/HomeCare';
import Physio from './Components/Physio';
import Radiology from './Components/Radiology'
import MedicalEquipment from './Components/MedicalEquipment';
import Footer from './Components/Footer';

import Pediatrician from './Components/Consultation/Pediatrician';
import Orthopedic from './Components/Consultation/Orthopedic';
import Gynaecologist from './Components/Consultation/Gynaecologist';
import Urologist from './Components/Consultation/Urologist';
import Pulmonologist from './Components/Consultation/Pulmonologist';
import Diabetologist  from './Components/Consultation/Diabetologist';
import Nephrologist from './Components/Consultation/Nephrologist';
import Dental from './Components/Consultation/DentalConsultation';
import GeneralPhysician from './Components/Consultation/GeneralPhysician';

import BabyCare from './Components/HomeCare/BabyCare';
import DoctoratHome from './Components/HomeCare/DoctoratHome';
import ECGTestAtHome from './Components/HomeCare/ECGTestAtHome';
import ElderlyCare from './Components/HomeCare/ElderlyCare';
import HomeNursing from './Components/HomeCare/HomeNursing';
import PatientCare from './Components/HomeCare/PatientCare';
import VaccinationatHome from './Components/HomeCare/VaccinationatHome';

import ECG from './Components/Radiology/ECG'
import CTScan from './Components/Radiology/CTScan';
import MRIScan from './Components/Radiology/MRIScan';
import PETCTScan from './Components/Radiology/PETCTScan';
import UltrasoundScan from './Components/Radiology/UltrasoundScan';
import XRay from './Components/Radiology/XRay';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-consultation" element={<DoctorConsultation />}>
          <Route path="general-physician" element={<GeneralPhysician />} />
          <Route path="pediatrician" element={<Pediatrician />} />
          <Route path="orthopedic" element={<Orthopedic />} />
          <Route path="gynaecologist" element={<Gynaecologist />} />
          <Route path="urologist" element={<Urologist />} />
          <Route path="physiotherapy" element={<Pulmonologist />} />
          <Route path="pulmonologist" element={<Pulmonologist />} />
          <Route path="diabetologist" element={<Diabetologist />} />
          <Route path="nephrologist" element={<Nephrologist />} />
          <Route path="dental" element={<Dental />} />
        </Route>
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/home-care" element={<HomeCare />} >
          <Route path="baby-care" element={<BabyCare />} />
          <Route path="doctor-at-home" element={<DoctoratHome />} />
          <Route path="ecg-test-at-home" element={<ECGTestAtHome />} />
          <Route path="elderly-care" element={<ElderlyCare />} />
          <Route path="home-nursing" element={<HomeNursing />} />
          <Route path="patient-care" element={<PatientCare />} />
          <Route path="vaccination-at-Home" element={<VaccinationatHome />} />
        </Route>
        <Route path="/physio" element={<Physio />} />
        <Route path="/radiology" element={<Radiology/>}>
          <Route path="ct-scan" element={<CTScan />} />
          <Route path="ecg" element={<ECG />} />
          <Route path="mri-scan" element={<MRIScan />} />
          <Route path="pet-ct-scan" element={<PETCTScan />} />
          <Route path="ultrasound-scan" element={<UltrasoundScan />} />
          <Route path="x-ray" element={<XRay />} />
        </Route>
        <Route path="/medical-equipment" element={<MedicalEquipment />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
