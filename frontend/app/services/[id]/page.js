import HireUsComponent from '@/app/Components/SingleServiceComponent/SingleServiceComponent';
import React from 'react';
import api from "@/utils/axios"; 

export default async function ServicePage({ params }) {
  const {id} = params;
  
  try{
    const res = await api.get(`/services/${id}/`);
    const service = res.data;

    return (
    <div className='pt-8 pb-20'>
      <HireUsComponent service={service} />
    </div>
  );
  }catch (error) {
    console.error("Error fetching service:", error);
    return <div className='text-center pt-20 text-xl text-red-600'>Service not found or an error occurred.</div>;
  }

  
}