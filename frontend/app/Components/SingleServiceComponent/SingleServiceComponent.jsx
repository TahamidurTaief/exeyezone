import Image from 'next/image';
import { MobilePackageComponent, PackageComponent } from './PackageComponent';
import Carousel from './Slider';
import logo from "@/public/img/Logo/logo.png";

const HireUsComponent = ({ service }) => {
  // Add null check for service
  if (!service) {
    return <div className="container">Service data not available</div>;
  }

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE SECTION */}
        <div className="w-full lg:w-[60%] 2xl:w-[65%]">
          <h1 className="text-lg md:text-xl font-semibold font-lato leading-[150%]">
            {service?.title || 'Service Title'}
          </h1>
          
          <div className="flex flex-col md:flex-row gap-3 md:justify-between justify-start text-start md:items-center mt-3">
            <p className="text-[14px] md:text-16px font-poppins">
              <span className="font-semibold leading-[150%]">Rating: </span>
              {service?.rating || '0'} (343) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
              {service?.purchase_number || '0'} Order in Queue
            </p>
            <Image 
              src={logo} 
              alt="exeyezone" 
              placeholder="blur" 
              className="h-7 w-24" 
            />
          </div>

          <Carousel img={service?.service_images || []} />

          {/* Add null check for service_packages */}
          <MobilePackageComponent 
            pkg={service?.service_packages || []} 
            service={service || {}} 
          />

          {/* DESCRIPTION SECTION */}
          <div className="mt-10">
            <h1 className="text-xl justify-start text-gray-700 font-semibold font-poppins">
              About this Service
            </h1>
            <div
              className="mt-5 font-lato"
              dangerouslySetInnerHTML={{ 
                __html: service?.description || '<p>No description available</p>' 
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE SECTION */}
        {/* Add null check for service_packages */}
        <PackageComponent 
          pkg={service?.service_packages || []} 
          service={service || {}} 
        />
      </div>
    </div>
  );
};

export default HireUsComponent;