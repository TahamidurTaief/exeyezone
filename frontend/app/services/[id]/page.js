import HireUsComponent from '@/app/Components/SingleServiceComponent/SingleServiceComponent';
import React from 'react';

export default async function ServicePage({ params }) {
//   const { id } = params;

  return (
    <div className='pt-8 pb-20'>
      <HireUsComponent />
    </div>
  );
}