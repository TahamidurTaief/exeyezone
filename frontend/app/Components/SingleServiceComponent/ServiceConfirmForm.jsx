import React, { useState } from 'react'

const ServiceConfirmForm = ({onClose, pkg, service}) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        contact_number: '',
        message: '',
        service_title: service?.title || '',
        package_type: pkg || ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const inputClass = "text-sm bg-gray-100 py-3 px-4 rounded border-0 outline-0 font-lato";

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
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service-orders/`, {  // Remove /api/ from the URL
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
          });

          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setSubmitSuccess(true);
          setTimeout(() => {
              onClose();
          }, 2000);
      } catch (error) {
          console.error('Error submitting form:', error);
          alert(`There was an error submitting your form: ${error.message}`);
      } finally {
          setIsSubmitting(false);
      }
  };

    return (
        <div>
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                {/* Modal Content */}
                <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] md:w-full max-w-md">
                    <h2 className="text-xl text-[var(--primary)] flex mb-4 font-lato font-bold leading-6 justify-center font-raleway border-b pb-3 mx-auto">
                        Confirm your Order
                    </h2>
                    <h2 className="text-lg text-gray-800 mb-4 font-lato font-semibold leading-6">
                        Project: <span className="font-medium">{service?.title || 'N/A'}</span>
                    </h2>
                    <h2 className="text-lg text-gray-800 mb-4 font-lato font-semibold leading-6">
                        Package: <span className="font-medium">{pkg || 'N/A'}</span>
                    </h2>
                    <p className="text-sm text-gray-600">
                        Please provide your information through this form. Our Team will contact you as soon as possible.
                    </p>
                    
                    {submitSuccess ? (
                        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                            Thank you! Your order has been submitted successfully.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-3 [&>input]:font-poppins'>
                            <input 
                                type="text" 
                                name="full_name"
                                placeholder='Full Name' 
                                className={inputClass}
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                            <input 
                                type="email" 
                                name="email"
                                placeholder='Email' 
                                className={inputClass}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="contact_number"
                                placeholder='Contact Number' 
                                className={inputClass}
                                value={formData.contact_number}
                                onChange={handleChange}
                                required
                            />
                            <textarea 
                                name="message" 
                                cols="10" 
                                placeholder='Drop your message.' 
                                className={inputClass}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <div className="flex flex-row gap-4">
                                <button 
                                    type="submit" 
                                    className='bg-[var(--primary)] hover:bg-[var(--secondary)] cursor-pointer duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                                <button 
                                    type="button"
                                    onClick={onClose} 
                                    className='hover:bg-[var(--primary)] bg-[var(--secondary)] cursor-pointer duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded text-center items-center justify-center font-medium'
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ServiceConfirmForm