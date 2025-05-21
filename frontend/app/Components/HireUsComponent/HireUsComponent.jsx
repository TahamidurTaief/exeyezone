'use client';



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HireUsComponent = () => {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_number: '',
    description: '',
    service: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inputStyle = "text-sm font-poppins bg-gray-100 py-3 px-4 rounded border-0 outline-0";

  // Fetch services on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/services/');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  // Update packages when service is selected
  useEffect(() => {
    if (selectedService) {
      setPackages(selectedService.service_packages);
      setFormData(prev => ({
        ...prev,
        service: selectedService.id
      }));
    }
  }, [selectedService]);

  const handleServiceSelect = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    setSelectedService(service);
    setSelectedPackage(null);
  };

  const handlePackageSelect = (packageId) => {
    const pkg = packages.find(p => p.id === packageId);
    setSelectedPackage(pkg);
    setFormData(prev => ({
      ...prev,
      package: pkg.id
    }));
  };

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
      const response = await axios.post(
        'http://127.0.0.1:8000/hire-requests/',
        formData
      );

      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        contact_number: '',
        description: '',
        service: '',
        package: ''
      });
      setSelectedService(null);
      setSelectedPackage(null);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting hire request:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container h-full my-auto">
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 font-lato bg-white drop-shadow-2xl gap-10 px-6 py-10 rounded-xl">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-raleway text-2xl text-gray-800 font-bold">
              Let's Build Something Great Together <br />
              <span className="text-[var(--primary)]">— Hire Our Expert Team </span>
            </h2>
      
            <p className='font-lato text-gray-700 font-normal text-sm text-justify leading-[170%]'>
              At ExeyeZone, we believe that every great project starts with a conversation...
            </p>
          </div>

          <div className="">
            <h2 className="font-raleway text-2xl text-gray-800 font-bold uppercase">
              <span className="text-[var(--primary)]">Hire</span> Us!
            </h2>
            
            {submitSuccess ? (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                Thank you! Your request has been submitted successfully. Our team will contact you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
                {/* Service Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className={`${inputStyle} text-gray-700 font-poppins font-normal cursor-pointer w-full text-left`}>
                    {selectedService ? selectedService.title : 'Select Service'}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full max-h-60 overflow-y-auto">
                    <DropdownMenuLabel className="font-poppins font-medium">Services</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {services.map(service => (
                      <DropdownMenuItem 
                        key={service.id} 
                        onClick={() => handleServiceSelect(service.id)}
                        className="cursor-pointer"
                      >
                        {service.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Package Dropdown - Only enabled when service is selected */}
                <DropdownMenu>
                  <DropdownMenuTrigger 
                    className={`${inputStyle} text-gray-700 font-poppins font-normal cursor-pointer w-full text-left ${!selectedService ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!selectedService}
                  >
                    {selectedPackage ? `${selectedPackage.package_type} ($${selectedPackage.price})` : 'Select Package'}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full max-h-60 overflow-y-auto">
                    <DropdownMenuLabel className="font-poppins font-medium">Packages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {packages.map(pkg => (
                      <DropdownMenuItem 
                        key={pkg.id} 
                        onClick={() => handlePackageSelect(pkg.id)}
                        className="cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold">{pkg.package_type} (${pkg.price})</span>
                          <span className="text-sm">{pkg.description}</span>
                          <span className="text-xs text-gray-500">Delivery: {pkg.delivery_time} days | Revisions: {pkg.revision_count}</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Input Fields */}
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className={inputStyle}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="tel" 
                  name="contact_number"
                  placeholder="Contact Number" 
                  className={inputStyle}
                  value={formData.contact_number}
                  onChange={handleChange}
                  required
                />
                <textarea 
                  name="description" 
                  placeholder="Tell us about your project..." 
                  className={inputStyle} 
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className={`bg-[var(--primary)] hover:bg-[var(--secondary)] duration-200 font-poppins text-white text-sm w-30 px-5 py-2 rounded cursor-pointer ${
                    isSubmitting || !selectedService || !selectedPackage ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting || !selectedService || !selectedPackage}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireUsComponent;