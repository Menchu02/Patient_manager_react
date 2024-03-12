import React from 'react';

export default function Patient() {
  return (
    <div>
      <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre: {''}
          <span className='font-normal normal-case'>Hook</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Propietario: {''}
          <span className='font-normal normal-case'>Carmen</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: {''}
          <span className='font-normal normal-case'>correo@correo.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Feacha Alta: {''}
          <span className='font-normal normal-case'>10/12/2023</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Síntomas: {''}
          <span className='font-normal normal-case'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original.
          </span>
        </p>
      </div>
    </div>
  );
}
