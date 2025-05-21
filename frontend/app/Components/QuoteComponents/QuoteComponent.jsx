'use client'


import React, { useState } from 'react';

const QuoteComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote-requests/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        contact_number: '',
        description: ''
      });
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('There was an error submitting your quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container h-full my-auto">
        <div className="my-24 grid grid-cols-1 md:grid-cols-2 font-lato bg-white drop-shadow-2xl gap-10 px-6 py-10 rounded-xl">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-raleway text-2xl text-gray-800 font-bold">
              <span className="text-[var(--primary)]">Request a Quote </span>
              for Your Custom Services or Custom Project
            </h2>
      
            <p className='font-lato text-gray-700 font-normal text-sm text-justify leading-[170%]'>
              Looking for a custom solution tailored to your unique needs? Whether it's a personalized website, application, or feature development, we're here to help...
            </p>
          </div>

          <div className="">
            <h2 className="font-raleway text-2xl text-gray-800 font-bold uppercase">
              Get a <span className="text-[var(--primary)]">Quote!</span>
            </h2>
            
            {submitSuccess ? (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                Thank you! Your quote request has been submitted successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-3'>
                <input 
                  type="text" 
                  name="name"
                  placeholder='Name' 
                  className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder='Email' 
                  className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text" 
                  name="contact_number"
                  placeholder='Contact Number' 
                  className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'
                  value={formData.contact_number}
                  onChange={handleChange}
                  required
                />
                <textarea 
                  name="description" 
                  cols="10" 
                  placeholder='Description of the custom service or custom project.' 
                  className='text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0'
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className='bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteComponent;