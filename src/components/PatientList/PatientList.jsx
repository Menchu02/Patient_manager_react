import React from 'react';

import Patient from '../Patient/Patient';

export default function PatientList() {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll '>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus {''}
        <samp>Pacienten y Citas</samp>
      </p>

      <Patient />
      <Patient />
    </div>
  );
}
