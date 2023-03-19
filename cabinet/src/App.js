import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentification from "./components/Authentification";
import PatientListS from "./components/Secretary/PatientList";
import PatientListD from "./components/Docoter/PatientList"
import AppointmentS from './components/Secretary/Appointment';
import AppointmentD from './components/Docoter/Appointment';
import PatientAuthentification from './components/Patient/Authentification'
import PatientRecordD from './components/Docoter/PatientRecord'
import PatientRecordS from './components/Secretary/PatientRecord'
import WaitingListD from './components/Docoter/WaitingList';
import WaitingListS from './components/Secretary/WaitingList';
import SignUp from './components/Patient/SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Authentification' element={<Authentification />} />
          <Route path='/Liste Patient' element={<PatientListS />} />
          <Route path='/Doctor Patient' element={<PatientListD />} />
          <Route path='/Appointement' element={<AppointmentS />} />
          <Route path='/AppointementD' element={<AppointmentD />} />
          <Route path='/AuthentificationP' element={<PatientAuthentification />} />
          <Route path='/Record' element={<PatientRecordD />} />
          <Route path='/RecordS' element={<PatientRecordS />} />
          <Route path='/WaitingS' element={<WaitingListS />} />
          <Route path='/Waiting' element={<WaitingListD />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
